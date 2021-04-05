class employee {constructor(name, rollno, gmail) {
      this.name = name;
      this.rollno = rollno;
      this.gmail = gmail;}
  showname() {
      return this.name;
  }
  showno() {
      return this.rollno;
  }
  showgmail() {
      return this.gmail;
  }
  showemp() {
      return "employee";
  }
}

module.exports = employee;
