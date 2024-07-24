import { words } from "../constants/constants";

export const pickRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const getFinishedWordClassNames = (solution: string, word: string) => {
  const result = Array(5).fill("wrong");
  const solutionChars = solution.split("");
  const wordChars = word.split("");

  // First pass: find correct letters
  for (let i = 0; i < 5; i++) {
    if (wordChars[i] === solutionChars[i]) {
      result[i] = "correct";
      solutionChars[i] = ""; // Remove this character from consideration
      wordChars[i] = "";
    }
  }

  // Second pass: find semi-correct letters
  for (let i = 0; i < 5; i++) {
    if (wordChars[i] !== "") {
      const index = solutionChars.indexOf(wordChars[i]);
      if (index !== -1) {
        result[i] = "semi-correct";
        solutionChars[index] = ""; // Remove this character from consideration
      }
    }
  }

  return result;
};

export const merge = (letters: string, currentWord: string) => {
  return Array.from(new Set(letters + currentWord)).join("");
};

export const getKeyboardLetterClassName = (
  letter: string,
  solution: string,
  guesses: string[]
) => {
  const ind = solution.indexOf(letter);
  if (ind === -1) return "wrong";

  if (guesses.find((guess) => guess[ind] === letter)) return "correct";

  return "semi-correct";
};
