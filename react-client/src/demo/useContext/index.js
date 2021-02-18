import React from "react";
import Message from "./message/message";
import Navigate from "./navigate/navigate";
import { AppContext } from "./context";

function UseContext() {
  return (
    <AppContext.Provider value={{ username: "superman" }}>
      <div className="Context">
        <Message />
        <Navigate />
      </div>
    </AppContext.Provider>
  );
}

export default UseContext;
