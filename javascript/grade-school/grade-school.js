
export class GradeSchool {
  constructor(){
    this.db = {}
    this.names = {}
  }

  roster() {
    const stringCopy = JSON.stringify(this.db)
    const objCopy = JSON.parse(stringCopy)
    return objCopy
  }

  add(name, grade) {
    if(this.names[name]){
      const oldGrade = this.names[name]
      if(this.db[oldGrade].size === 1) delete this.db[oldGrade]
      else this.db[oldGrade] = this.db[oldGrade].filter(student => student !== name)
    }else if(this.db[grade]) {
      this.db[grade].push(name)
      this.db[grade].sort()
    } else this.db[grade] = [name]
    this.names[name] = grade
  }

  grade(grade) {    
    return this.db[grade] ? [...this.db[grade]] : []
  }
}
