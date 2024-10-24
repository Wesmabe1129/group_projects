import Comment from '../../models/Comment.js'; // Adjust the path as necessary

class CommentController {
  constructor() {
    this.comment = new Comment();
  }

  /**
   * Create a new comment for a post.
   */
  async createComment(req, res) {
    try {
      const { parent_thread_id, content, accountId } = req.body;

      // Validate the required fields
      if (!parent_thread_id || !content || !accountId) {
        return res.status(400).json({ success: false, message: 'Parent Thread ID, content, and account ID are required' });
      }

      // Use the Comment model's create method to add the comment to the database
      const result = await this.comment.create(parent_thread_id, content, accountId);
      console.log("result", result);
      res.status(result.affectedRows > 0 ? 201 : 500).json({
          success: result.affectedRows > 0,
          message: result.affectedRows > 0 ? 'Comment created successfully' : 'Failed to create comment',
          data: result.affectedRows > 0 ? { comment_id: result.insertId } : null
      });
    } catch (error) {
      console.error('Error creating comment:', error.message);
      res.status(500).json({ success: false, message: 'Failed to create comment', data: null });
    }
  }

  /**
   * Get comments for a specific post.
   */
  async getCommentByThreadId(req, res) {
    try {
      const { thread_id } = req.params;
      console.log("thread id is", thread_id);
      
      const comments = await this.comment.fetchCommentByPostId(thread_id);

      res.json({
          success: true,
          message: comments.length ? "Comments fetched successfully" : "No comments available",
          data: { comments }
      });
    } catch (error) {
      console.error('Error fetching comments:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch comments' });
    }
  }

  /**
   * Get replies for a specific comment.
   */
  async getRepliesByCommentId(req, res) {
    try {
      const { commentId } = req.params;
      const replies = await this.comment.fetchRepliesByCommentId(commentId);

      if (!replies.length) {
        return res.status(200).json({ success: true, message: 'No replies available', data: [] });
      }

      res.json({ success: true, data: replies });
    } catch (error) {
      console.error('Error fetching replies:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch replies' });
    }
  }
}

// Export an instance of the CommentsController
export default new CommentController();
