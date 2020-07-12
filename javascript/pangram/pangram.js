
export const isPangram = (string) => {
  let lowerCaseString = string.toLowerCase()
  const includes = (letter) => lowerCaseString.includes(letter)
  return ALPHABET.every(includes)
};

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
