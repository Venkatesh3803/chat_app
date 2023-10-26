import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    profileImg: {
        type: String,
    }

}, { timestamps: true })

export default mongoose.model("user", userSchema);