//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (string) => {
  if(string.length === 0) return string
  let arr = string.split("")
  return arr.map(dna => TRANSCRIPTION[dna]).join("")
}

const TRANSCRIPTION = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

