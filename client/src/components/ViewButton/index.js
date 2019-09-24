import React from "react"

function ViewButton(props) {
    return (
        <a className = "view-btn" {...props} type = "button"> Click me</a>
    )
}

export default ViewButton;