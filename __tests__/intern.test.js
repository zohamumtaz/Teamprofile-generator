const Intern = require("../lib/Intern");

test("school", () => {
    const num = "UOFT";
    const emp = new intern("ok", 1, "k181163@test.com", num);
    expect(emp.school).toBe(num);
});

test(" should return \"Intern\"", () => {
    const num = "intern";
    const emp = new intern("ok", 1, "k181163@test.com", "UOFT");
    expect(emp.showemp()).toBe(num);
});

test("Can get school via getSchool()", () => {
    const num = "UOFT";
    const emp = new intern("ok", 1, "k181163@test.com", num);
    expect(emp.showschool()).toBe(num);
});