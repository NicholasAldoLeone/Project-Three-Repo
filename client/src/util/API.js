import axios from "axios"

export default {
    getQuizzes: function() {
        return axios.get("/api/database/all");
    },

    getSingleQuiz: function(quizId) {
        return axios.get("api/database/" + quizId);
    }
}