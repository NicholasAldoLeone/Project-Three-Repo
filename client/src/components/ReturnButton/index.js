import React from "react"
import "./returnButton.css"

function ReturnButton(props) {
    return (
        <button className = "btn btn-primary" {...props} type = "button" id = "return-button"> The Button</button>
    )
}

export default ReturnButton;