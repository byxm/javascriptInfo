const { assert } = require("chai");
const { deepCloneObject } = require("../../Object/clone/deepClone");

describe("compareObject", () => {
  it("should return true when pass the same objects arguments", () => {
    const testObj = { name: "simone" };
    const testDeepObj = {
      name: "simone",
      nested: { sex: "男", hobby: "篮球" },
    };
    assert.notEqual(deepCloneObject(testObj), testObj);
    assert.notEqual(deepCloneObject(testDeepObj), testDeepObj);
    assert.notEqual(deepCloneObject(testDeepObj).nested, testDeepObj.nested);
  });
});
