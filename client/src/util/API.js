import axios from "axios"

export default {
    getQuizzes: function() {
        return axios.get("/api/database/all");
    },

    getSingleQuiz: function() {
        return axios.get("api/database/:id");
    }
}