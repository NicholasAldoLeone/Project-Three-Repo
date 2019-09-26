import React from "react"

function ViewButton(props) {
    return (
        <a className = "view-btn" {...props} type = "button"> Take Quiz</a>
    )
}

export default ViewButton;