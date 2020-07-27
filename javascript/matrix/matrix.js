export class Matrix {
  constructor(string) {
    this.string = string
  }

  generateMatrix() {
    return this.string.split("\n").map((subArr) => subArr.split(" ").map((char) => parseInt(char)))
  }

  get rows() {
    return this.generateMatrix()
  }

  get columns() {
    return this.generateMatrix()[0].map((column, index) => this.generateMatrix().map(row => row[index]))
  }
}
