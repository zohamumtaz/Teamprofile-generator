const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("number", () => {
    const num = 1163;
    const emp = new manager("ok", 1, "k181163@test.com", num);
    expect(emp.number).toBe(num);
});

test("getRole() should return \"manager\"", () => {
    const num= "manager";
    const emp = new manager("ok", 1, "k181163@test.com", 1163);
    expect(emp.showemp()).toBe(num);
});

test("shownumber", () => {
    const num = 1163;
    const emp = new manager("ok", 1, "k181163@test.com", num);
    expect(emp.shownumber()).toBe(num);
});