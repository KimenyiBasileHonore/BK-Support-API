import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },


})

const QuestionModel = mongoose.model("Question", QuestionSchema);
export default QuestionModel;