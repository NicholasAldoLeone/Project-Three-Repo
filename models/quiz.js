const mongoose = require("mongoose");
const Schema = mongoose.Schema

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    questions: {
        type: Array,
        required: true,
    },

    options: {
        type: Array,
        required: true,
    },

    answers: {
        type: Array,
        required: true,
    }
})

const Quiz = mongoose.model("Quiz", quizSchema)

module.exports = Quiz;