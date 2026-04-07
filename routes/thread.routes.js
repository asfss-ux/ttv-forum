import { Router } from 'express';
import { getThreadById, getAllThreads, deleteThread, updateThread } from '../controllers/thread.controllers.js';
const threadRouter = Router();



 
threadRouter.get('/:id', getThreadById);
threadRouter.get('/all', getAllThreads);
threadRouter.delete('/:id', deleteThread);
threadRouter.put('/:id', updateThread);

export default threadRouter;