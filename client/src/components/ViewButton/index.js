import React from "react"
import "./viewButton.css"

function ViewButton(props) {
    return (
        <a className = "btn btn-primary" {...props} type = "button" id = "quiz-button"> Take Quiz</a>
    )
}

export default ViewButton;