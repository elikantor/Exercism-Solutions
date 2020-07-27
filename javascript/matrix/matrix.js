export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n").map((subArr) => subArr.split(" ").map((char) => Number(char)))
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return this.matrix[0].map((column, index) => this.matrix.map(row => row[index]))
  }
}
