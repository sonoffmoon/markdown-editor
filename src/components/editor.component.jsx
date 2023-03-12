import { useContext } from "react";
import { TextContext } from "../context/textContext";

import { saveAs } from "file-saver";

import Button from "./button.component";
import { ReactComponent as IconDownload } from "../icons/icon-download.svg";
import "../styles/editor.css";

const Editor = () => {
  const { text, setText } = useContext(TextContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const saveMarkdownFile = (text) => {
    let name = prompt("Name a file:");
    if (name === null) return;
    if (name === "") name = "Unnamed file";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${name}.md`);
  };

  return (
    <>
      <h2 className="heading">Markdown</h2>
      <div className="editor__controls">
        <Button
          className="btn"
          title="Export as .md"
          onClick={() => {
            saveMarkdownFile(text);
          }}
          content={<IconDownload />}
        />
      </div>
      <textarea
        className="editor__input"
        onChange={handleChange}
        placeholder={"Start writing yout markdown here..."}
        spellCheck="false"
      ></textarea>
    </>
  );
};

export default Editor;
