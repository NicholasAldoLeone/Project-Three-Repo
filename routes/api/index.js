const router = require("express").Router();


// Book routes
router.use("/quiz", require("./quizzes"));

module.exports = router;