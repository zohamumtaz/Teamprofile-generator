const employee = require("./employee");

class manager extends employee {
    constructor(name, rollno, gmail, number) {
        super(name, rollno, gmail);
        this.number = number;
    }

    showemp() {
        return "manager";
    }
    shownumber() {
        return this.number;}}module.exports = manager;