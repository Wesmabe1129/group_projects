import Like from '../../models/Like.js';

class LikeController {
  constructor() {
    this.like = new Like();
  }

  /**
   * Add a like to a post
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   */
  async addLike(req, res) {
    const { thread_id } = req.params;
    const { accountId } = req.body;
    try {
      const response = await this.like.add(thread_id, accountId);
      // console.log(response);
      res.json({
        success: true,
        message: "Successfully added like",
        like_id: response?.insertId
      });
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
    }
  }

  /**
   * Remove a like from a post
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   */
  async removeLike(req, res) {
    // const { thread_id } = req.params;
    const { thread_id, accountId } = req.body;
    // const { account_id } = res.locals;
    console.log(accountId, thread_id, "remove")
    try {
      await this.like.remove(thread_id, accountId);

      res.json({
        success: true,
        message: "Successfully removed like"
      });
      // console.log(res)
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
    }
  }

  /**
   * Get likes for a specific post
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {void}
   */
  async getLikes(req, res) {
    const { thread_id } = req.params;

    try {
      const likes = await this.like.getAllLikes(thread_id);
      // console.log(likes, "addahmsflksd");
      res.json({
        success: true,
        data: likes || []
      });
    } catch (err) {
      res.json({
        success: false,
        message: err.toString(),
      });
    }
  }
}

export default LikeController;
