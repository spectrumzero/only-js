"use strict";
/* NOTE:
 * in BDD, the specification goes first. specification = total description + `it` use cases
 * spec can be used in 3 ways:
 * as tests,
 * as docs (the descriptions of describe and it)
 * and as actual examples (those function statements written in `it`).
 */

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/* describe("title", function() { ... }); */
describe("pow", function () {
  describe("raises x to power 3", function () {
    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));

    function makeTest(x) {
      let expected = x * x * x;
      // it("use case description", function() { ... });
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("test", function () {
    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));

    it("test 1", () => alert(1));
    it("test 2", () => alert(2));
  });

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
