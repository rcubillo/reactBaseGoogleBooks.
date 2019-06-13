import React from "react";
import "./styleForm.css";


export function Input(props) {
  return (
    // <div className="formEverything">
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
    // </div>
  );
}

export function FormBtn(props) {
  return (
    // <div className="formEverything">
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
    // </div>
  );
}

