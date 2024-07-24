import { words } from "../constants/constants";
import { getFinishedWordClassNames, merge, pickRandomWord } from "./helpers";

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

describe("merge", () => {
  it("should return the merged string with unique letters when there are no duplicates", () => {
    const letters = "abc";
    const currentWord = "defgh";
    const result = "abcdefgh";
    expect(merge(letters, currentWord)).toBe(result);
  });

  it("should return the merged string with unique letters when there are duplicates in currentWord", () => {
    const letters = "abc";
    const currentWord = "defgd";
    const result = "abcdefg";
    expect(merge(letters, currentWord)).toBe(result);
  });

  it("should return the merged string with unique letters when there are duplicates in both letters and currentWord", () => {
    const letters = "abc";
    const currentWord = "cadef";
    const result = "abcdef";
    expect(merge(letters, currentWord)).toBe(result);
  });

  it("should return the original currentWord string when letters is empty", () => {
    const letters = "";
    const currentWord = "abcde";
    const result = "abcde";
    expect(merge(letters, currentWord)).toBe(result);
  });

  it("should handle completely duplicate letters and words correctly", () => {
    const letters = "abc";
    const currentWord = "abcde";
    const result = "abcde";
    expect(merge(letters, currentWord)).toBe(result);
  });

  it("should handle a mix of cases where letters and currentWord have overlapping characters", () => {
    const letters = "xyz";
    const currentWord = "yyzzz";
    const result = "xyz";
    expect(merge(letters, currentWord)).toBe(result);
  });
});
