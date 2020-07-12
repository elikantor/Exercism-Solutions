export const square = (square) => {
  if (square >= 1 && square <= 64){
    let grains = 1
    for (let i = 1; i < square; i++) {
      grains *= 2
    }
    return BigInt(grains)
  } else {
    throw new Error('square must be between 1 and 64')
  }
};

export const total = () => {
  let total = BigInt(0)
  for (let i = 1; i <= 64; i++) {
    total += square(i)
  }
  return total
};
