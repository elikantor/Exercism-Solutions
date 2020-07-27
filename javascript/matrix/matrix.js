export class Matrix {
  constructor(string) {
    this.string = string
  }

  generateMatrix() {
    return this.string.split("\n").map((subArr) => subArr.split(" ").map((char) => Number(char)))
  }

  get rows() {
    return this.generateMatrix()
  }

  get columns() {
    const matrix = this.generateMatrix()
    return matrix[0].map((column, index) => matrix.map(row => row[index]))
  }
}
