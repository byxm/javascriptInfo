import useKeyPress from "./useKeyPress";
import useForm from "./useForm";

const CustomHook = () => {
  const keyCode = useKeyPress();

  const validation = {
    name: (val) => {
      if (val.length <= 10 || val.length >= 20) {
        return "姓名不能长度不能小于10位或者大于20位";
      }
    },
    age: (val) => {
      if (!parseInt(val) === parseFloat(val)) {
        return "年龄必须是整数";
      }
    },
  };

  const { value, setValue, error, reset } = useForm(
    { name: "initSimone", age: 0 },
    validation
  );

  const handleSubmitValue = (e) => {
    e.preventDefault();
  };

  return (
    <>
      key code:
      {keyCode}
      {/* <div style={{ width: 100, height: 100, backgroundColor: 'red' }} ref={ref}></div> */}
      <form onSubmit={handleSubmitValue}>
        <div>
          <label>姓名：</label>
          <input
            onChange={(e) => setValue("name", e.target.value, validation)}
            value={value.name}
          />
          <span style={{ color: "red" }}>{error.name}</span>
        </div>
        <div>
          <label>年龄：</label>
          <input
            onChange={(e) => setValue("age", e.target.value, validation)}
            value={value.age}
          />
          <span style={{ color: "red" }}>{error.age}</span>
        </div>
        <button type="submit">提交</button>
        <button onClick={reset}>重置</button>
      </form>
    </>
  );
};

export default CustomHook;
