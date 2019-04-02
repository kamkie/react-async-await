import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

function App() {
  const [state, setState] = React.useState([]);
  const append = (message: string) => {
    console.log(message);
    setState(messages => [...messages, message]);
  };

  const example = async (num: number, delayTime: number) => {
    append(`async${num} started`);
    await wait(delayTime);
    append(`after wait ${num}`);
    await wait(100);
    append(`async${num} ended`);
  };

  const run = async () => {
    append("async0 started");
    example(1, 2500);
    await example(2, 500);
    example(3, 1500);
    append("async 0 ended");
  };

  const run2 = async () => {
    append("async0 started");
    await example(1, 1500);
    await example(2, 500);
    example(3, 1500);
    append("async 0 ended");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setState([])}>clear</button>
      <button onClick={run}>run</button>
      <button onClick={run2}>run2</button>
      <ul>
        {state.map(e => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
