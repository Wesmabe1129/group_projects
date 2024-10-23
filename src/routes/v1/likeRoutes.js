import express from 'express';
import LikeController from '../../controllers/v1/likeController.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.post('/:thread_id/like', likeController.addLike.bind(likeController));
likeRouter.delete('/:thread_id/unlike', likeController.removeLike.bind(likeController));
likeRouter.get('/:thread_id/getLikes', likeController.getLikes.bind(likeController));

export default likeRouter;
