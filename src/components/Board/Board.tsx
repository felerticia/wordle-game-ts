import "./Board.css";

type BoardProps = {
  guesses: string[];
};

const Board = ({ guesses }: BoardProps) => {
  return (
    <div className="board">
      {guesses.map((_, rowIdx) => (
        <div key={rowIdx} className="board__row">
          {new Array(5).fill("").map((cell, cellIdx) => (
            <div className="board__cell">{cellIdx}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
