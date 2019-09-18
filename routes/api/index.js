const router = require("express").Router();
const quizRoutes = require("./quizzes.js");

// Book routes
router.use("/database", quizRoutes);

module.exports = router;