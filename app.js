import express from 'express'
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import threadRouter from './routes/thread.routes.js';
import postRouter from './routes/post.routes.js';
import connectDB from './database/mongodb.js';
import { config } from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import configurePassport from './config/passport.js';



const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/threads', threadRouter);
app.use('/api/v1/posts', postRouter);



configurePassport();
app.use(passport.initialize());
app.use(passport.session());









app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, async () => {
    console.log('SERWER IS ON PORT ' + PORT)
    await connectDB();
})


export default app;