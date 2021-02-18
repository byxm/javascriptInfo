import { useEffect, useState } from "react";

function useUserInfo() {
  const [userInfo, setUserInfo] = useState({ name: "simone", age: 22 });
  useEffect(() => {
    setTimeout(() => {
      setUserInfo(userInfo);
    }, 2000);
  });
  return userInfo;
}

export default useUserInfo;
