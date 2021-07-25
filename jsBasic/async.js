const startRequest = async () => {
  console.log("res");
  const testReq = async (number) => {
    console.log(`enter testReq ${number}`);
    await controllReq();
    console.log(`enter testReq2 ${number}`);
    await controllReq();
    console.log(`enter testReq3 ${number}`);
    await controllReq();
  };

  testReq(1);
  testReq(2);

  return "done";
};

const controllReq = async () => {
  for (let i = 0; i < 1e9; i++) {}
};

// console.log("startRes", startRequest());

startRequest().then(res => {
    console.log('res', res);
})







