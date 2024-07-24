import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { merge, pickRandomWord } from "./helpers/helpers";
import { rows } from "./constants/constants";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>(new Array(rows).fill(""));
  const [currentWord, setCurrentWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [letters, setLetters] = useState("");

  const selectWord = () => setSolution(pickRandomWord);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent | string) => {
      const key = typeof e === "string" ? e.toLowerCase() : e.key.toLowerCase();
      if (key === "backspace") {
        if (currentWord.length) {
          setCurrentWord((currentWord) => currentWord.slice(0, -1));
        }
        return;
      }

      if (key === "enter") {
        if (currentWord.length === 5) {
          setGuesses((guesses) =>
            guesses.map((guess, idx) =>
              idx === currentRow ? currentWord : guess
            )
          );
          setCurrentRow((currentRow) => currentRow + 1);
          setCurrentWord("");
          setLetters((letters) => merge(letters, currentWord));
        }
        return;
      }

      if (
        key >= "a" &&
        key <= "z" &&
        key.length === 1 &&
        currentWord.length < 5
      ) {
        setCurrentWord((currentWord) => currentWord + key.toUpperCase());
        return;
      }
    },
    [currentWord, currentRow]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    selectWord();
  }, []);

  return (
    <div className="App">
      <Board
        guesses={guesses}
        currentRow={currentRow}
        currentWord={currentWord}
        solution={solution}
      />
      <Keyboard
        letters={letters}
        solution={solution}
        guesses={guesses}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
