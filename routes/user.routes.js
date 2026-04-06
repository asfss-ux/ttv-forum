import { Router } from 'express';

const userRouter = Router();



userRouter.get('/:username');
userRouter.put('/settings');



export default userRouter;