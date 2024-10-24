import { connection } from '../core/database.js'; // Adjust the path as necessary

class Comment {



  /**
   * Create a new comment.
   * @param {number} postId - ID of the post the comment is associated with.
   * @param {string} content - The content of the comment.
   * @param {number} accountId - ID of the account making the comment.
   * @returns {Promise<object>} - Result of the insert operation.
   */



  async create(parent_thread_id, content, accountId) {
    const query = `
      INSERT INTO threads (content, account_id, parent_thread_id, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    console.log("Values being passed:", { parent_thread_id, content, accountId });

    const values = [content, accountId, parent_thread_id];
    console.log(values);
    try {
      const [result] = await connection.execute(query, values);
      return result;
    } catch (error) {
      console.error('Error creating comment:', error.message);
      throw error;
    }
  }




  /**
   * Fetch comments by post ID.
   * @param {number} postId - ID of the post to get comments for.
   * @returns {Promise<array>} - List of comments.
   */



  async fetchCommentByPostId(thread_id) {
    const query = `
      SELECT * FROM threads
      WHERE parent_thread_id = ?
      ORDER BY created_at DESC
    `;
    
    try {
      const [comments] = await connection.execute(query, [thread_id]);
      return comments;
    } catch (error) {
      console.error('Error fetching comments by post ID:', error.message);
      throw error;
    }
  }




  /**
   * Fetch replies for a specific comment.
   * @param {number} commentId - ID of the parent comment to get replies for.
   * @returns {Promise<array>} - List of replies.
   */

  
  async fetchRepliesByCommentId(commentId) {
    const query = `
      SELECT * FROM replies
      WHERE parent_comment_id = ?
      ORDER BY created_at DESC
    `;
    
    try {
      const [replies] = await connection.execute(query, [commentId]);
      return replies;
    } catch (error) {
      console.error('Error fetching replies by comment ID:', error.message);
      throw error;
    }
  }
}

export default Comment;
