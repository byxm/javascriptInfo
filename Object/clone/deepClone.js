/**
 * @description 对象深拷贝
 */
function deepCloneObject(obj) {
  const cloneObj = {};
  let nestedProp;
  const keys = Object.keys(obj);
  keys.forEach((el) => {
    if (typeof obj[el] === "object") {
      nestedProp = deepCloneObject(obj[el]);
      cloneObj[el] = nestedProp;
    } else {
      cloneObj[el] = obj[el];
    }
  });
  return cloneObj;
}

module.exports = {
  deepCloneObject,
};
