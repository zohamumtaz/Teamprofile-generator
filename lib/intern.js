const employee = require("./employee");
class intern extends employee {
    constructor(name, rollno, gmail, school) {
        super(name, rollno, gmail);
        this.school = school;
    }
    showemp() {
        return "intern";
    }

    showSchool() {
        return this.school;
    }
}module.exports = intern;