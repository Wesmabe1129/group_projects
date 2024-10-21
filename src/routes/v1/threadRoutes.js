// postsRoutes.js
import express from 'express';
// import PostsController from '../../controllers/v1/threadController.js';
import threadController from '../../controllers/v1/threadController.js';

const threadRouter = express.Router();

threadRouter.post('/', threadController.createPost.bind(threadController));

// Route to get posts with optional query parameters: limits, offset, sortBy
threadRouter.get('/', threadController.getPosts.bind(threadController));
// console.log(threadRouter.get('/', threadController.getPosts.bind(threadController)));

// Route to get a specific post by ID
threadRouter.get('/:thread_id', threadController.getPostById.bind(threadController));

// Route to get comments for a specific post
// threadRouter.get('/:postId/comments', threadController.getPostComments.bind(threadController));

// Route to get replies for a specific comment on a post
// threadRouter.get('/:postId/comments/:commentId/replies', threadController.getCommentReplies.bind(threadController));

export default threadRouter;
