
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    twitchId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'moderator', 'admin'],
        default: 'user'
    },
    twichRereshToken: {
        type: String,
    },
    accountLevel: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

const User = mongoose.model('User', userSchema);
export default User;












