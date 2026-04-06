import express from 'express'
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import threadRouter from './routes/thread.routes.js';
import postRouter from './routes/post.routes.js';



const app = express();


app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/threads', threadRouter);
app.use('/api/v1/posts', postRouter);











app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log('SERWER IS ON PORT ' + PORT)
})


export default app;