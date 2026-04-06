import { Router } from 'express';

const threadRouter = Router();




threadRouter.get('/:id');
threadRouter.get('/all');
threadRouter.delete('/:id');
threadRouter.put('/:id');

export default threadRouter;