import { useContext } from "react";
import "./App.css";
import Couter from "./components/Couter.jsx";
import { GlobalContext } from "./context/GlobalState.js";

function App() {
  const { count, Increment } = useContext(GlobalContext);

  console.log(count);

  const handleOnClick = () => {
    Increment(count);
  };

  return (
    // <GlobalProvider>
    <div className="App">
      <h1>{count}</h1>
      <Couter />
      <button onClick={handleOnClick}>Inc</button>
    </div>
    // </GlobalProvider>
  );
}

export default App;
