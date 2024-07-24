import { getKeyboardLetterClassName } from "../../helpers/helpers";
import "./Keyboard.css";

const keyboardRows = ["QWERTYUIOP", "ASDFGHJKL+", "ZXCVBNM-"];

type KeyboardProps = {
  letters: string;
  solution: string;
  guesses: string[];
};

const Keyboard = ({ letters, solution, guesses }: KeyboardProps) => {
  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard__row">
          {row.split("").map((letter, letterIdx) => (
            <div
              key={letterIdx}
              className={`keyboard__letter ${
                letters.includes(letter) &&
                getKeyboardLetterClassName(letter, solution, guesses)
              }`}
            >
              {letter === "+" ? "Enter" : letter === "-" ? "Delete" : letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
