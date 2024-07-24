import { getKeyboardLetterClassName } from "../../helpers/helpers";
import "./Keyboard.css";

const keyboardRows = ["QWERTYUIOP", "ASDFGHJKL+", "ZXCVBNM-"];

type KeyboardProps = {
  letters: string;
  solution: string;
  guesses: string[];
  handleKeyDown: (x: string) => void;
};

const Keyboard = ({
  letters,
  solution,
  guesses,
  handleKeyDown,
}: KeyboardProps) => {
  const onKeyDown = (key: string) =>
    handleKeyDown(key === "+" ? "Enter" : key === "-" ? "Backspace" : key);
  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard__row">
          {row.split("").map((letter, letterIdx) => (
            <div
              onClick={() => onKeyDown(letter)}
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
