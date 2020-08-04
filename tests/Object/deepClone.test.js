const { assert } = require("chai");
const { testObjectAssign } = require("../../Object/clone/deepClone");

describe("compareObject", () => {
  it("should return true when pass the same objects arguments", () => {
    assert.equal(
      testObjectAssign({ name: "simone" }, { name: "simone" }),
      false
    );
    assert.equal(
      testObjectAssign({ name: "simone" }, { name: "simone" }),
      true
    );
    assert.equal(
      testObjectAssign({ name: "simone" }, { name: "simone" }),
      true
    );
  });
});
