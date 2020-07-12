export const square = (square) => {
  if (square >= 1 && square <= 64){
    let result = 1
    for (let i = 1; i < square; i++) {
      result *= 2
    }
    if(result > BigInt(Number.MAX_SAFE_INTEGER)){
      return BigInt(result)
    } else  {
      return result
    }
  } else {
    throw new Error('square must be between 1 and 64')
  }
};

export const total = () => {
  let result = BigInt(0)
  for (let i = 1; i <= 64; i++) {
    result += BigInt(square(i))
  }
  return result
};
