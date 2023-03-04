import { useState } from "react";

import Editor from "./components/editor.component";
import Preview from "./components/preview.component";

import { TextContext } from "./context/textContext";

import Button from "./components/button.component";
import { ReactComponent as IconLightTheme } from "./icons/icon-theme-light.svg";
import { ReactComponent as IconDarkTheme } from "./icons/icon-theme-dark.svg";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const value = { text, setText };

  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  return (
    <TextContext.Provider value={value}>
      <main data-theme={theme}>
        <div className="wrapper">
          <section className="editor">
            <Editor />
          </section>
          <section className="preview">
            <Preview />
          </section>
        </div>
        <section className="settings">
          <Button
            className={"btn"}
            onClick={switchTheme}
            content={theme === "light" ? <IconLightTheme /> : <IconDarkTheme />}
          />
        </section>
      </main>
    </TextContext.Provider>
  );
}

export default App;
