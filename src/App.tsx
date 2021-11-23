import "./App.css";
import CounterC from "./components/Counter";
import { useCount } from "./context/count";

function App() {
  const { state, dispatch } = useCount();
  return (
    <div className="App">
      <h1>{state?.count}</h1>
      <CounterC />
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement count parent
      </button>
    </div>
  );
}

export default App;
