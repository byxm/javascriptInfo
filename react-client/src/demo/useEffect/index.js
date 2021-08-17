/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import useUserInfo from "./useUserInfo";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../../redux/action'
import Memorize from "./memorize";

function UseEffect() {
  // 1. Use the name state variable

  const [name, setName] = useState(0);

  const dispatch = useDispatch();

  // const userInfo = useUserInfo();

  // useEffect(() => {
  //   console.log("effect");
  //   window.addEventListener("resize", () => {
  //     console.log("resize screen");
  //   });

  //   // useEffect的回调是清除上一次useEffect带来的副作用
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       console.log("移开了");
  //     });
  //   };
  // });

  const obj = useRef({ name: "simone" });

  const state = useSelector((state) => state);
  console.log("state----------", state);

  useEffect(() => {
     dispatch(fetchData()) 
  }, []);

  // 2. Use an effect for persisting the form
  //   useEffect(function persistForm() {
  //     localStorage.setItem("formData", name);
  //   });
  // 3. Use the surname state variable
  const [surname, setSurname] = useState("Poppins");

  // 4. Use an effect for updating the title
  //   useEffect(function updateTitle() {
  //     document.title = name + " " + surname;
  //     setName("");
  //   });

  return (
    <div>
      useEffect：{ state.value }
      <p>name:{name}</p>
      <p>surname:{surname}</p>
      <Memorize />
      <button
        onClick={() => {
          dispatch({ type: "createNumber" });
        }}
      >
        click me
      </button>
    </div>
  );
}

export default UseEffect;

/* eslint-disable */
