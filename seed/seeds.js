const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
)

const quizSeed = [
    {
        title: "Number Quiz",
        author: "Jeffery Shoeshow",

        quiz: [{
            question_one: {
                body: "1 + 1 = ?",
                options: ["A: 2", "B: 3", "C: 1", "D: 100"],
                answer: "A",
            },

            question_two: {
                body: "2 + 2 = ?",
                options: ["3", "4", "10", "1000"],
                answer: "B",
            }
        }],
    }
]