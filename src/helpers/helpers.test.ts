import { words } from "../constants/contants";
import { pickRandomWord } from "./helpers";

describe("pickRandomWord", () => {
  it("should return a word from the words list", () => {
    const result = pickRandomWord();
    expect(words).toContain(result);
  });

  it("should return a word of length 5", () => {
    const result = pickRandomWord();
    expect(result).toHaveLength(5);
  });
});
