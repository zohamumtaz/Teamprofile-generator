const engineer = require("../lib/engineer");

test("github", () => {
    const num = "github";
    const emp = new engineer("ok", 1, "k181163@test.com", num);
    expect(emp.github).toBe(num);
});

test("should return \"engineer\"", () => {
    const num = "engineer";
    const emp = new engineer("ok", 1, "k181163@test.com", "github");
    expect(emp.showemp()).toBe(num);
});

test("github name", () => {
    const num = "github";
    const emp= new engineer("ok", 1, "k181163@test.com", num);
    expect(emp.showgithub()).toBe(num);
});