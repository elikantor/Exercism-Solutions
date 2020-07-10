//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (string) => {
  return [...string].map(dna => TRANSCRIPTION[dna]).join("")
}

const TRANSCRIPTION = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

