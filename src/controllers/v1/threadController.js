// controllers/v1/postsController.js
import Thread from '../../models/thread.js'; // Adjust the path as necessary

class threadController {
  constructor() {
    this.thread = new Thread();
  }

  /**
   * Get all posts with optional limits, offset, and sortBy query parameters.
   */
  async getPosts(req, res) {
    try {
      // const { thread_id } = req.query;
      // console.log(res,"this is a request");
      // console.log(thread_id, "12");
      
     
      const posts = await this.thread.fetchAll();
      // console.log(posts,'ETO YUNG POST HEHE')
      if (!posts.length) {
        return res.status(200).json({ success: true, message: 'No posts available', data: [] });
      }
      
      // if (!thread_id) {
      //   return res.status(400).json({ success: false, message: 'thread_id is required', 'howtobedead':"magpuyat :)"});
      // }
  
      res.json({ success: true, data: posts });
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch posts' });
    }
  }  
  
  

  /**
   * Get a post by its ID.
   */
  async getPostById(req, res) {
    try {
      const { thread_id } = req.params;
      const post = await this.thread.findById(thread_id); // Use the Thread method

      if (!post) {
        return res.status(404).json({ success: false, message: 'Post not found' });
      }

      res.json({ success: true, data: post });
    } catch (error) {
      console.error('Error fetching post:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch post' });
    }
  }

  /**
   * Create a new post.
   */
  async createPost(req, res) {
    try {
      console.log(req,"habrdbiaebfopwb")
      const { title, content, accountId } = req.body;

      // Validate the required fields
      console.log(req.body, "hello")
      if (!title || !content || !accountId) {
        return res.status(400).json({ success: false, message: 'Title, content, and account ID are required' });
      }

      // Use the Thread model's create method to add the post to the database
      const result = await this.thread.create(title, content, accountId);

      if (result.affectedRows > 0) {
        return res.status(201).json({ success: true, message: 'Post created successfully' });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to create post' });
      }
    } catch (error) {
      console.error('Error creating post:', error.message);
      res.status(500).json({ success: false, message: 'Failed to create post' });
    }
  }

  /**
   * Get comments for a specific post.
   */
  async getPostComments(req, res) {
    try {
      const { postId } = req.params;
      const [comments] = await this.thread.fetchCommentsByPostId(postId); // You need to implement this method in Thread

      res.json({ success: true, data: comments });
    } catch (error) {
      console.error('Error fetching comments:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch comments' });
    }
  }

  /**
   * Get replies for a specific comment on a post.
   */
  async getCommentReplies(req, res) {
    try {
      const { postId, commentId } = req.params;
      const [replies] = await this.thread.fetchRepliesByCommentId(postId, commentId); // You need to implement this method in Thread

      res.json({ success: true, data: replies });
    } catch (error) {
      console.error('Error fetching replies:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch replies' });
    }
  }
}

// Export an instance of the PostsController
export default new threadController();
