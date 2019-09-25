const router = require("express").Router();

router.use("/database", require("./quizzes"));

module.exports = router;