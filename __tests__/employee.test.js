const employee = require("../lib/employee");

test("Can employee instance", () => {
    const emp = new employee();
    expect(typeof(emp)).toBe("object");});

test("Constuctor", () => {
    const name = "zoha";
    const emp = new employee(name);
    expect(emp.name).toBe(name);});

test("rollno", () => {
    const num = 1163;
    const emp = new employee("ok", num);
    expect(emp.rollno).toBe(num);
});

test("gmail", () => {
    const num = "k181163@test.com";
    const emp = new employee("ok", 1, num);
    expect(emp.gmail).toBe(num);
});

test("return name()", () => {
    const num = "zoha";
    const emp = new employee(num);
    expect(emp.showname()).toBe(num);
});

test("Can get id via getId()", () => {
    const num = 1163;
    const emp = new employee("ok", num);
    expect(emp.showid()).toBe(num);
});

test("return gmail", () => {
    const num = "k181163@test.com";
    const emp = new employee("ok", 1, num);
    expect(emp.showgmail()).toBe(num);
});

test(" should return \"Employee\"", () => {
    const num = "employee";
    const emp = new employee("zoha", 1, "k181163@test.com");
    expect(emp.showemp()).toBe(num);
});