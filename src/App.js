import React, { useState, useEffect } from "react";
import "./styles.css";
const Counter = ({ counter }) => {
  return <h1>{counter}</h1>;
};
// component
export default function App() {
  const [i, setI] = useState(10);
  useEffect(() => {
    setInterval(() => {
      setTimeout(old => {
        if (old > 0) {
          return old - 1;
        }
        return old;
      });
    }, 1000);
    clearInterval(timer);
    return () => {
      console.log(222);
    };
  }, []);
  const change = () => {
    setI(i + 1);
  };
  return (
    <div className="App">
      <h1 onClick={change}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
/* return React.createElement("div", { className: "App" }, [
   React.createElement("h1", {},"Hello Sandbox"),
    React.createElement("h2", {}, "Hello Sandbox")
    ]); */
