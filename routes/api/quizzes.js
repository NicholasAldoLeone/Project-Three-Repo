const router = require("express").Router();
const db = require("../../models");

router.get("/all", function (req, res) {
    db.Quiz.find().then(function (data) {
        res.json(data);
    })
})

router.get("/id/:id", function (req, res) {
    db.Quiz.findById(req.params.id).then(function(data){
        console.log("results: " + data);
        res.json(data);
    })
})

router.get("/route/:title", function(req, res){
    db.Quiz.find({routeTitle: req.params.title}).then(function(data){
        res.json(data)
    })
})

router.post("/create", function(req, res){
    console.log(req.body)

    db.Quiz.create({
        title: req.body.title,
        author: req.body.author,
        quiz: req.body.quiz

    }).then(function(data){
        console.log("Quiz created: " + data);
    })
})

module.exports = router;