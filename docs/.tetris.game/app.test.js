const { setScore, addScore } = require("./app.js");

describe("setScore", () => {
  it("should set the score to the given value", () => {
    setScore(5);
    expect(score).toBe(5);
  });
});

describe("addScore", () => {
  it("should add the given value to the current score", () => {
    setScore(5);
    addScore(3);
    expect(score).toBe(8);
  });
});
