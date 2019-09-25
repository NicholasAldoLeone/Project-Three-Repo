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

router.get("/route/:routeTitle", function(req, res){
    db.Quiz.find({routeTitle: req.params.routeTitle}).then(function(data){
        res.json(data)
    })
})

router.post("/create", function(req, res){
    console.log(req.body)

    db.Quiz.create({
        title: req.body.title,
        author: req.body.author,
        questions: req.body.questions

    }).then(function(data){
       res.send({msg: "Quiz Created Successfully"})})
       .catch(err => {
        return next(err);
    });
    })
   



module.exports = router;