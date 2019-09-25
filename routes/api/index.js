const router = require("express").Router();
const quizRoutes = require("./quizzes.js");

router.use("/database", require("./quizzes"));

// Book routes
router.use("/database", quizRoutes);
module.exports = router;

