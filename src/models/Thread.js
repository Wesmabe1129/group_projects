import { connection } from '../core/database.js';

class Thread {
  constructor() {
    this.thread_db = connection;
  }

  /**
   * Create a new thread (post)
   *
   * @param {string} title
   * @param {string} content
   * @param {number} accountId
   * @param {number} relevanceScore
   * @returns {Object}
   * @throws {Error}
   */
  async create(title, content, accountId) {
    try {
      const [results,] = await this.thread_db.execute(
        'INSERT INTO threads (title, content, account_id, created_at) VALUES (?, ?, ?, NOW())',
        [title, content, accountId]
      );
      return results;
    } catch (err) {
      console.error('<error> thread.create', err);
      throw err;
    }
  }

  /**
   * Fetch a thread by its ID
   *
   * @param {number} id
   * @returns {Object}
   * @throws {Error}
   */
  async findById(thread_id) {
    try {
      const [results] = await this.thread_db.execute(
        'SELECT * FROM threads WHERE thread_id = ?',
        [thread_id]
      );

      return results.length ? results[0] : null;
    } catch (err) {
      console.error('<error> thread.findById', err);
      throw err;
    }
  }

  /**
   * Fetch all threads by account ID with optional limit and offset
   *
   * @param {number} accountId
   * @param {number} limit
   * @param {number} offset
   * @param {string} sortBy
   * @returns {Array}
   * @throws {Error}
   */
  async fetchAllByAccount(accountId, limit = 10, offset = 0, sortBy = 'created_at') {
    try {
      const [results,] = await this.db.execute(
        `SELECT * FROM posts WHERE account_id = ? ORDER BY ${sortBy} DESC LIMIT ? OFFSET ?`,
        [accountId, limit, offset]
      );
      return results;
    } catch (err) {
      console.error('<error> thread.fetchAllByAccount', err);
      throw err;
    }
  }

  /**
   * Fetch relevant posts with optional limit and offset
   *
   * @param {number} limit
   * @param {number} offset
   * @returns {Array}
   * @throws {Error}
   */
  async fetchAll() {
    // console.log('IJOWDBFOWBFOWBGWOGBRWOGBWOEUJVW')

    // console.log(this.thread_db,"owebfowbojfe")
    try {
      // console.log('Fetching posts for thread_id:'); // Log the thread_id
      const [results] = await this.thread_db.execute(
        `SELECT * FROM threads`
      );
      return results;
    } catch (err) {
      console.error('<error> thread.fetchAll', err.message); // Log error message
      throw new Error('Database query failed'); // Throw a new error with a more descriptive message
    }
  }
  

  /**
   * Delete a thread by its ID
   *
   * @param {number} id
   * @returns {Object}
   * @throws {Error}
   */
  async deleteById(id) {
    try {
      const [results,] = await this.db.execute(
        'DELETE FROM posts WHERE id = ?',
        [id]
      );
      return results;
    } catch (err) {
      console.error('<error> thread.deleteById', err);
      throw err;
    }
  }
}

export default Thread;
