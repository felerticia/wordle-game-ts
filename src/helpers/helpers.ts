import { words } from "../constants/contants";

export const pickRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
