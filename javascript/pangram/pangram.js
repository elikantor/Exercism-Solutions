
export const isPangram = (string) => {
  let bool = true
  
  for(let i = 0; i < string.length; i++) {
    if(ALPHABET[string[i].toLowerCase()]) {
      ALPHABET[string[i].toLowerCase()] = 2
    }
  }

  for (let letter in ALPHABET) {
    if (ALPHABET[letter] === 1) bool = false
  }

  for (let letter in ALPHABET) {
    ALPHABET[letter] = 1
  }

  return bool
};


const ALPHABET = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
  e: 1,
  f: 1,
  g: 1,
  h: 1,
  i: 1,
  j: 1,
  k: 1,
  l: 1,
  m: 1,
  n: 1,
  o: 1,
  p: 1,
  q: 1,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 1,
  w: 1,
  x: 1,
  y: 1,
  z: 1
}
