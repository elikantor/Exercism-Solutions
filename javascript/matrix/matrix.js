export class Matrix {
  constructor(string) {
    this.string = string
  }

  generateMatrix() {
    let matrix = this.string.split("\n").map((subArr) => subArr.split(" ").map((char) => parseInt(char)))
    return matrix
  }

  generateRow(){
    let matrix = this.generateMatrix()
    let rotatedMatrix = []
    let j = 0
    while(j < matrix[0].length) {
      let i = 0
      let subArr = []
      while (i < matrix.length) {
        subArr.push(matrix[i][j])
        i++
      }
      rotatedMatrix.push(subArr)
      j++
    }
    return rotatedMatrix
  }


  get rows() {
    return this.generateMatrix()
  }

  get columns() {
    return this.generateRow()
  }
}
