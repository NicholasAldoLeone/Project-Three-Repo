import axios from "axios"

export default {
    getQuizzes: function() {
        return axios.get("/api/database/all");
    },

    getSingleQuiz: function(id) {
        return axios.get("/api/database/id/" + id);
    },

    getByTitle: function(routeTitle) {
        return axios.get("/api/database/route/" + routeTitle)
    },

    createQuiz: function(quizForm) {
        console.log(quizForm);
        return axios.post("/api/database/create", quizForm);
    }
}