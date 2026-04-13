import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,   
        required: true,
        trim: true
    },
    email: {
        type: String,   
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
}, { timestamps: true });

export default mongoose.model("User", userSchema);