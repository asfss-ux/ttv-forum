import { Router } from 'express';
import { getUserProfile, updateUserSettings } from '../controllers/user.controllers.js';
const userRouter = Router();



userRouter.get('/:username', getUserProfile);
userRouter.put('/settings', updateUserSettings);



export default userRouter;