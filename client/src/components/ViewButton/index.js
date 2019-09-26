import React from "react"
import "./viewButton.css"

function ViewButton(props) {
    return (
        <button className = "btn btn-primary" {...props} type = "button" id = "quiz-button"> Take Quiz</button>
    )
}

export default ViewButton;