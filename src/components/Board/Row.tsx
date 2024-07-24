const Row = ({ word }: { word: string }) => {
  return new Array(5).fill("").map((_, idx) => (
    <div className="board__cell" key={idx}>
      {word[idx] ?? ""}
    </div>
  ));
};
export default Row;
