import { connection } from '../core/database.js';

class Like {
  /**
   * Add a like to a post
   * 
   * @param {number} post_id - The ID of the post being liked
   * @param {number} account_id - The ID of the user who likes the post
   * @returns {Promise<object>} - The result of the insert query
   */
  async add(thread_id, account_id) {
    const query = `
      INSERT INTO likes (account_id, thread_id)
      VALUES (?, ?)
    `;
    
    try {
      // const [result] = await connection.execute(query, [account_id, thread_id]);
      console.log('Add result:');
      // return result;
    } catch (err) {
      console.error('Error adding like:', err.message);
      throw err;
    }
  }

  /**
   * Remove a like from a post
   * 
   * @param {number} post_id - The ID of the post to unlike
   * @param {number} account_id - The ID of the user who wants to remove the like
   * @returns {Promise<void>}
   */
  async remove(thread_id, account_id) {
    console.log('thread_id:', thread_id);
    console.log('account_id:', account_id);

    const query = `
      DELETE FROM likes
      WHERE thread_id = ? AND account_id = ?
    `;

    try {
      // const [result] = await connection.execute(query, [thread_id, account_id]);
      console.log('Delete result:' );
      // return result;
    } catch (err) {
      console.error('Error removing like:', err.message);
      throw err;
    }
  }

  /**
   * Get all likes for a specific post
   * 
   * @param {number} post_id - The ID of the post
   * @returns {Promise<object[]>} - An array of likes
   */
  async getAllLikes(thread_id) {
    const query = `
        SELECT * FROM likes WHERE thread_id = ?
    `;
    try {
        const [likes] = await connection.execute(query, [thread_id]);
        return likes;
    } catch (err) {
        console.error('Error fetching likes:', err.message);
        throw err;
    }
  }
}

export default Like;
