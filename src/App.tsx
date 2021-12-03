import { useState } from "react";
import "./App.css";
import ComponentA from "./HOC/ComponentA";
import App1 from "./pattern_1";
import { CountProvider1 } from "./pattern_1/context/count";
import App2 from "./pattern_2";
import { CountProvider2 } from "./pattern_2/context/count";

function App() {
  return (
    <div className="App">
      <CountProvider1>
        <App1 />
      </CountProvider1>
      <CountProvider2>
        <App2 />
      </CountProvider2>
      <ComponentA />
    </div>
  );
}

export default App;
