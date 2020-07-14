export class Matrix {
  constructor(string) {
    this.string = string
  }

  generateMatrix() {
    let stringArr = this.string.split("\n")
    let matrix = stringArr.map((subArr) => {
      return subArr.split(" ")
    })
    let i = 0
    while(i < matrix.length) {
      let j = 0
      while (j < matrix[0].length) {
        matrix[i][j] = parseInt(matrix[i][j])
        j++
      }
      i++
    }
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
