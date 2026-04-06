import { Router } from 'express';


const postRouter = Router();

postRouter.get('/thread/:threadId');
postRouter.post('/thread/:threadId');
postRouter.delete('/:id');
postRouter.put('/:id');
postRouter.post('/:id/like');
postRouter.post('/:id/dislike');



export default postRouter;