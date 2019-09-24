import axios from "axios"

export default {
    getQuizzes: function() {
        return axios.get("/api/database/all");
    },

    getSingleQuiz: function(id) {
        return axios.get("/api/database/" + id);
    }
}