import React, { useEffect, useState } from "react";
//Pascal case
const UseEffect = () => {
  const [loading, setloading] = useState(false);
  const [counter, setcounter] = useState(0);

  // mounting , state update
  useEffect(() => {
    ////// anonymous function
    console.log("jello fired"); // effect
  });

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("loading");

    fetch("api1");
  }, [loading]);

  useEffect(() => {
    console.log("counter");
    fetch("office");
  }, [counter]);

  return (
    <div>
      <button
        onClick={(e) => {
          setloading(true);
        }}
      >
        Loading
      </button>
      <button
        onClick={(e) => {
          setcounter(counter + 1);
        }}
      >
        Counter
      </button>
    </div>
  );
};

export default UseEffect;
