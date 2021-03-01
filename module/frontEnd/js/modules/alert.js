define(["dataService"], (dataService) => {
  let Tom = "Tom";
  function getName() {
    alert(`${dataService.showMsg()} Hi this is ${Tom}`);
  }
 return { getName };
});


   






