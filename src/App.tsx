import { useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";

function App() {
  const [solution, setSolution] = useState("");

  const selectWord = () => setSolution(pickRandomWord);

  useEffect(() => {
    selectWord();
  }, []);

  return <div>{solution}</div>;
}

export default App;
