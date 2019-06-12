import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <header className="jumbobox">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light">React Google Books Search</h1>
            <p className="lead">Search for and Save Books of Interest</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Jumbotron;
