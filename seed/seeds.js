const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/quizness"
);

const quizSeed = [
  {
    title: "Math Quiz",
    author: "Jeffery Shoeshow",
  
    quiz: [
      {
        body: "What is the sum of 1 + 1?",
        options: ["A: 1", "B: 2", "C: 3", "D: 4"],
        correctAnswer: 2,
      },

      {
        body: "What is the sum of 2 + 2?",
        options: ["A: 8", "B: 7", "C: 4", "D: 2"],
        correctAnswer: 3,
      },

      {
        body: "What is the sum of 7 + 3?",
        options: ["A: 10", "B: 5", "C: 8", "D: 3"],
        correctAnswer: 1,
      }
    ]
  },

  {
    title: "Space Quiz",
    author: "Mark Getmon",

    quiz: [
      {
        body: "Which planet is the closes to the sun?",
        options: ["A: Earth", "B: Mercury", "C: Mars", "D: Jupiter"],
        correctAnswer: 2,
      },

      {
        body: "The Earth roates around ____",
        options: ["A: The Sun", "B: Earth", "C: Neptune", "D: Pluto"],
        correctAnswer: 1,
      },

      {
        body: "The larget planet in our solar system is?",
        options: ["A: Saturn", "B: Uranus", "C: Jupitur", "D: Earth"],
        correctAnswer: 3,
      }
    ]
  }
]

db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });