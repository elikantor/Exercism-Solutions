//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorArray) => {
 const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  colorArray = colorArray.length > 2 ? colorArray.slice(0,2) : colorArray
  for (let i = 0; i < colorArray.length; i++) {
    colorArray[i] = colors.indexOf(colorArray[i])
  }
  return parseInt(colorArray.join(""))
};
