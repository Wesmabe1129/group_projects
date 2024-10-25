import { connection } from '../core/database.js';
import { encryptPassword } from '../utils/hash.js';

class User {
  constructor() {
    this.thread_db = connection;
  }

  /**
   * Create user profile
   *
   * @param {String} username
   * @param {String} password
   *
   * @returns {Object}
   * @throws MySQL2 error
   *
   */
  async create(username, password) {
    try {
      
      const [results,] = await connection.execute(
        'INSERT INTO account (username, password) VALUES (?, ?)',
        [username, encryptPassword(password)],
      );
      console.log(results);

      return results;
    } catch (err) {
      console.error('<error> user.create', err);
      throw err;
        
    }

    
  }

  /**
   * Verify if account exists
   *
   * @param {string} username 
   * @param {string} password
   * @returns {Object}
   * @throws {Error}
   */
  async verify(username, password) {
    try {
      const [results,] = await connection.execute(
        'SELECT account_id, username FROM account WHERE username = ? AND password = ?',
        [username, encryptPassword(password)],
      )

      return results?.[0];
    } catch (err) {
      console.error('<error> user.verify', err);
      throw err;
    }
  }

  /**
   * Get user's information
   *
   * @param {string} username 
   * @returns {Object}
   * @throws {Error}
   *
   */
  async get(username) {
    try {
      const [results,] = await connection.execute(
        'SELECT account_id FROM account WHERE username = ?',
        [username]
      )

      return results?.[0];
    } catch (err) {
      console.error('<error> user.getInformation', err);
      throw err;
    }
  }

  /**
   * Find user by username
   *
   * @param {string} username 
   * @returns {Object}
   * @throws {Error}
   */
  async findByUsername(username) {
    try {
      const [results,] = await connection.execute(
        'SELECT account_id FROM account WHERE username = ?',
        [username]
      );

      return results.length ? results[0] : null;
    } catch (err) {
      console.error('<error> user.findByUsername', err);
      throw err;
    }
  }
  
  async getProfile(account_id) {
    try {
      const [accounts] = await connection.execute(
        'SELECT * FROM account WHERE account_id = ?',
        [account_id]
      );
      const [threads] = await connection.execute(
        'SELECT * FROM threads WHERE parent_thread_id IS NULL AND account_id = ?',
        [account_id]
      );
      const [comments] = await connection.execute(
        'SELECT * FROM threads WHERE parent_thread_id IS NOT NULL AND account_id = ?',
        [account_id]
      );


      // const [results,] = await connection.execute(
      //   'SELECT account_id FROM account WHERE username = ?',
      //   [username]
      // );

      return {
        // account: accounts.length ? accounts[0] : null,
        accounts: accounts.length ? accounts[0] : "NO ACCOUNT FOUND",
        threads: threads.length ? threads[0] : "NO THREAD FOUND",
        comments: comments.length ? comments[0] : "NO COMMENT FOUND"
    };
    } catch (err) {
      console.error('<error> user.findByUsername', err);
      throw err;
    }
  }
}

export default User;