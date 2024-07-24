import "./Board.css";
import Row from "./Row";

type BoardProps = {
  guesses: string[];
  currentRow: number;
  currentWord: string;
  solution: string;
};

const Board = ({ guesses, currentRow, currentWord, solution }: BoardProps) => {
  return (
    <div className="board">
      {guesses.map((_, rowIdx) => (
        <div key={rowIdx} className="board__row">
          <Row
            isFinished={currentRow > rowIdx}
            solution={solution}
            word={currentRow === rowIdx ? currentWord : guesses[rowIdx]}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
