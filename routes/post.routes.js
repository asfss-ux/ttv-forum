import { Router } from 'express';
import { getPostsByThreadId, createPost, deletePost, updatePost, likePost, dislikePost } from '../controllers/post.controllers.js';


const postRouter = Router();

postRouter.get('/thread/:threadId', getPostsByThreadId);
postRouter.post('/thread/:threadId', createPost);
postRouter.delete('/:id', deletePost);
postRouter.put('/:id', updatePost);
postRouter.post('/:id/like', likePost);
postRouter.post('/:id/dislike', dislikePost);



export default postRouter;