//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  if (num === 0) return []
  let result = [[1]]
  for (let i = 1; i < num; i++) {
    let tempArr = []
    for (let j = 0; j < i + 1; j++) {
      let left = result[i-1][j - 1] ? result[i-1][j - 1] : 0
      let right = result[i-1][j] ? result[i-1][j] : 0
      tempArr.push(left + right)
    }
    result.push(tempArr)
  }

  return result
};
