import React from "react";
import "./parent.css";

const Child = (props) => {
  return (
    <div className="child">
      {props.data}
      <button
        onClick={() => {
          props.handler();
        }}
      >
        Child
      </button>
    </div>
  );
};

export default Child;
