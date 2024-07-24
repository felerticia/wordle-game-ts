import { words } from "../constants/constants";

export const pickRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
