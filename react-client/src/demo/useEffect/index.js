/* eslint-disable */
import React, { useState, useEffect } from "react";
import useUserInfo from "./useUserInfo";
import Memorize from "./memorize";

function UseEffect() {
  // 1. Use the name state variable

  const [name, setName] = useState("Mary");
  const userInfo = useUserInfo();

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
      useEffect
      <p>name:{name}</p>
      <p>surname:{surname}</p>
      <Memorize />
    </div>
  );
}

export default UseEffect;

/* eslint-disable */
