import React from "react";
import Child from "./Child";
import "./parent.css";
// CSS IN JS

const Parent = () => {
  const handler = () => {
    console.log("handler fired");
  };

  return (
    <div className="parent">
      <Child data="Regards from parent" handler={handler} />
    </div>
  );
};

export default Parent;
