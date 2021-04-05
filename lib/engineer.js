const employee = require("./employee");

class engineer extends employee {
    constructor(name, rollno, gmail, github) {
        super(name, rollno, gmail);
        this.github = github;
    }
    showgithub() {
        return this.github;
    }

    showemp() {
        return "engineer"; }}




module.exports = engineer;