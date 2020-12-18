const express = require("express");
const app = express();
const port = 3000;
let theThing = null;
const replaceThing = function () {
  let originalThing = theThing;
  let unused = function () {
    if (originalThing) console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join("*"),
    someMethod: function () {
      console.log(someMessage);
    },
  };
};
app.get("/leak", (req, res) => {
  replaceThing();
  let memoryInfo = JSON.stringify(process.memoryUsage());
  console.log(memoryInfo);
  res.send(memoryInfo);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));