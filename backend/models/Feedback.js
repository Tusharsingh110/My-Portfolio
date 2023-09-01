const mongoose = require('mongoose');
const {Schema} = mongoose;
const FeedbackSchema = new Schema ({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    feedbackType:{
        type:String,
        required:true
    },
    collab: {
        type:Boolean,
        required:true
    },
    message: {
        type:String,
        required:true
    }
});

const Feedback = mongoose.model('feedback',FeedbackSchema);
Feedback.createIndexes();
module.exports = Feedback;