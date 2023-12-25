import React from "react";
import "./style.css";
function message({ id, body, isPeer }) {
  if (isPeer === true) {
    return (
      <div className="yourMessages text">
        <p className="text-p">{body}</p>
      </div>
    );
  } else {
    return (
      <div className="myMessages text">
        <p className="text-p">{body}</p>
      </div>
    );
  }
}

export default message;
