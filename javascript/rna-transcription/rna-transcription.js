//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (string) => {
  if(string.length === 0) return string
  let arr = string.split("")

  for (let i = 0; i < arr.length; i++) {
    let DNA = arr[i]
    switch (DNA) {
      case 'G':
        arr[i] = "C"
        break
      case 'C':
        arr[i] = "G"
        break
      case 'T':
        arr[i] = "A"
        break
      case 'A':
        arr[i] = "U"
        break
    }
  }
  return arr.join("")


}
