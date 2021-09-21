import { useEffect, useState } from "react";

const useKeyPress = (node = document.body) => {
  const [key, setKey] = useState("");

  const handleKeyBoardPress = (e) => {
    const code = e.keyCode;
    setKey(code);
  };

  useEffect(() => {
   node.addEventListener("keypress", handleKeyBoardPress);
    return () => {
      node.removeEventListener("keypress", handleKeyBoardPress);
    };
  }, [node]);

  return key;

};

export default useKeyPress;
