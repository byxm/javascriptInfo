import React, { useContext, useState } from "react";
import Message from "./message/message";
import Navigate from "./navigate/navigate";
import { AppContext } from "./context";

const themes = {
  light: { foreground: "#000000", background: "#eeeeee" },
  dark: { foreground: "#ffffff", background: "#222222" },
};

const ThemeContext = React.createContext(themes.light);

function UseContext() {
  // return (
  //   <AppContext.Provider value={{ username: "superman" }}>
  //     <div className="Context">
  //       <Message />
  //       <Navigate />
  //     </div>
  //   </AppContext.Provider>
  // );

  // 切换主题的例子
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }

  const [theme, setTheme] = useState("light");

  return (
    <>
      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}>
        change
      </button>
      <ThemeContext.Provider value={themes[theme]}>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
}

export default UseContext;
