import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";
import { rows } from "./constants/constants";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [, setSolution] = useState("");
  const [guesses] = useState<string[]>(new Array(rows).fill(""));

  const selectWord = () => setSolution(pickRandomWord);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    console.log(e);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    selectWord();
  }, []);

  return (
    <div className="App">
      <Board guesses={guesses} />
      <Keyboard />
    </div>
  );
}

export default App;
