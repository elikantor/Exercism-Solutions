
export class GradeSchool {
  constructor(){
    this.db = {}
  }

  roster() {
    return this.db
  }

  add(name, grade) {
    if(this.db[grade]) {
      this.db[grade].push(name)
      this.db[grade].sort()
    }
    else this.db[grade] = [name]
  }

  grade(grade) {    
    return this.db[grade] ? this.db[grade] : []
  }
}
