
export const isPangram = (string) => {
  const lowerCaseString = string.toLowerCase();
  return ALPHABET.every(letter => lowerCaseString.includes(letter));
};

const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"]
