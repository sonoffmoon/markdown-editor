import { useState } from "react";

import Editor from "./components/editor.component";
import Preview from "./components/preview.component";

import { TextContext } from "./context/textContext";

import "./App.css";

function App() {
  const [text, setText] = useState();
  const value = { text, setText };

  return (
    <TextContext.Provider value={value}>
      {/* <header>
        <h1>Markdown editor</h1>
      </header> */}
      <main>
        <div className="wrapper">
          <section className="editor">
            <h2>Markdown</h2>
            <Editor />
          </section>
          <section className="preview">
            <h2>Preview</h2>
            <Preview />
          </section>
        </div>
      </main>
    </TextContext.Provider>
  );
}

export default App;
