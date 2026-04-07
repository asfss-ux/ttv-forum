import { Router } from 'express';
import passport from 'passport';
const authRouter = Router();

authRouter.get('/twitch', passport.authenticate('twitch'));
authRouter.get('/twitch/callback', passport.authenticate('twitch', { failureRedirect: '/login-failed' }), (req, res) => {
    res.redirect('/'); 
});



export default authRouter;