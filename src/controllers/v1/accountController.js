import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

class AccountController {
  constructor() {
    this.user = new User();
  }

  /**
   * Create account controller
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   *
   */
  async create(req, res) {
    const { username, password } = req.body || {};
  
    try {
      // Check if the username already exists
      const existingUser = await this.user.get(username);
      if (existingUser) {
        return res.json({
          success: false,
          message: 'Username already exists. Please choose a different one.',
        });
      }
  
      // Proceed to create the new account if the username is not taken
      const response = await this.user.create(username, password);
  
      res.json({
        success: true,
        data: {
          recordIndex: response?.insertId
        },
      });
      res.end();
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
      res.end();
    }
  }

  /**
   *  Login Controller
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   */
  async login(req, res) {
    try {
      const { username, password } = req.body || {};

      const result = await this.user.verify(username, password);

      if (!result?.account_id) {
        return res.json({
          success: false,
          message: 'Invalid username or password',
        });
      }

      res.json({
        success: true,
        data: {
          token: jwt.sign({ 'username': username }, process.env.API_SECRET_KEY, {
            expiresIn: '1d',
          }),
        }
      });
      res.end();
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
      res.end()
    }
  }

  /**
   * Get user profile
   *
   * @todo Update this to pull from database
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   *
   */
  async profile(req, res) {
    try {
      const userInfo = await this.user.get(res.locals.username);

      res.json({
        success: true,
        data: {
          account_id: userInfo?.account_id,
          username: res.locals.username,
          // fullname: userInfo?.fullname,
        }
      })
      res.end();
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
    }
  }
}

export default AccountController;