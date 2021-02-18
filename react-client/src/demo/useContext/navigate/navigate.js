import React, { useContext } from "react";
import { AppContext } from "../context";

function Navigate() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Navigate
      {username}
    </div>
  );
}

export default Navigate;
