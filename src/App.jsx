import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [first, setFirst] = createSignal("Hello World!");

  const handleChange = (e) => {
    setFirst(e.target.value);
  };
  return (
    <>
      <input type="text" value={first()} onChange={(e) => handleChange(e)} />
    </>
  );
}

export default App;
