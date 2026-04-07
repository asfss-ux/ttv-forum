import passport from 'passport';
import { Strategy as TwitchStrategy } from 'passport-twitch-new';
import User from '../models/user.model.js';

export const configurePassport = () => {
    passport.use(new TwitchStrategy({
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_CLIENT_SECRET,
        callbackURL: process.env.TWITCH_CALLBACK_URL,
    },
    async(accessToken, refreshTokenm, profile, done) => {
        try {
            let user = await User.findOneAndUpdate({ twitchId: profile.id }, {
                username: profile.displayName,
                email: profile.email,
                profileImage: profile.profile_image_url
            }, { upsert: true, new: true }
        );
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    }); 
}

export default configurePassport;