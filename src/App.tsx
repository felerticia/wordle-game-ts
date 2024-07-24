import { useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";
import { rows } from "./constants/contants";
import Board from "./components/Board/Board";

function App() {
  const [, setSolution] = useState("");
  const [guesses] = useState<string[]>(new Array(rows).fill(""));

  const selectWord = () => setSolution(pickRandomWord);

  useEffect(() => {
    selectWord();
  }, []);

  return (
    <div className="App">
      <Board guesses={guesses} />
    </div>
  );
}

export default App;
