// postsRoutes.js
import express from 'express';
// import PostsController from '../../controllers/v1/threadController.js';
import commentController from '../../controllers/v1/commentController.js';

const commentRouter = express.Router();


commentRouter.post('/:thread_id/comment', commentController.createComment.bind(commentController));

commentRouter.get('/:thread_id/comments', commentController.getCommentByThreadId.bind(commentController));


// console.log(commentRouter)

// Route to get replies for a specific comment on a post
// commentRouter.get('/:postId/comments/:commentId/replies', commentController.getCommentReplies.bind(commentController));

export default commentRouter;
