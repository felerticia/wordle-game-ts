import { getFinishedWordClassNames } from "../../helpers/helpers";

type RowProps = {
  word: string;
  isFinished: boolean;
  solution: string;
};

const Row = ({ word, isFinished, solution }: RowProps) => {
  const colors = isFinished
    ? getFinishedWordClassNames(solution, word)
    : new Array(5).fill("");

  return new Array(5).fill("").map((_, idx) => (
    <div className={`board__cell ${colors[idx]}`} key={idx}>
      {word[idx] ?? ""}
    </div>
  ));
};
export default Row;
