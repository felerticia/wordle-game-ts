import { words } from "../constants/constants";
import { getFinishedWordClassNames, pickRandomWord } from "./helpers";

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

describe("getFinishedWordClassNames", () => {
  it("should return correct class names for all correct letters", () => {
    const solution = "APPLE";
    const word = "APPLE";
    const result = ["correct", "correct", "correct", "correct", "correct"];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });

  it("should return correct class names for no correct letters", () => {
    const solution = "APPLE";
    const word = "BURRY";
    const result = ["wrong", "wrong", "wrong", "wrong", "wrong"];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });

  it("should return correct class names for some correct and some semi-correct letters", () => {
    const solution = "APPLE";
    const word = "PAPER";
    const result = [
      "semi-correct",
      "semi-correct",
      "correct",
      "semi-correct",
      "wrong",
    ];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });

  it("should handle semi-correct letters when they appear more times in word or in solution", () => {
    const solution = "APPLE";
    const word = "PEACH";
    const result = [
      "semi-correct",
      "semi-correct",
      "semi-correct",
      "wrong",
      "wrong",
    ];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });

  it("should handle duplicate letters correctly", () => {
    const solution = "APPLE";
    const word = "ALLEE";
    const result = ["correct", "semi-correct", "wrong", "wrong", "correct"];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });

  it("should handle all semi-correct letters correctly", () => {
    const solution = "APPLE";
    const word = "PLEAP";
    const result = [
      "semi-correct",
      "semi-correct",
      "semi-correct",
      "semi-correct",
      "semi-correct",
    ];
    expect(getFinishedWordClassNames(solution, word)).toEqual(result);
  });
});
