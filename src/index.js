import React from "react";
import ReactDOM from "react-dom";

const firstName = "Angelo";
const lastName = "Hizon";
const favoriteNumber = 27;

ReactDOM.render(
  <div>
    <h1>
      Hello {firstName} {lastName}!
    </h1>
    <h1>
      Hello {firstName + " " + lastName}!
    </h1>
    <h1>
      Hello {`${firstName} ${lastName}`}!
    </h1>
    <p>My lucky number is {favoriteNumber}</p>
  </div>,
  document.getElementById("root")
);
