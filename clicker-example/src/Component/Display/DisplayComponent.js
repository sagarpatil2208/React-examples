import React from "react";
import "./Display.css";
function DisplayComponent(props) {
  return (
    <div class="container">
      <div>
        <span className="grey">{props.count}</span>
      </div>
    </div>
  );
}

export default DisplayComponent;
