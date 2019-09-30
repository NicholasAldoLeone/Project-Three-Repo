import React from "react";
import './form.css'
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="searchD">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="textD">
      <textarea className="searchT" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="searchB">
      {props.children}
    </button>
  );
}
