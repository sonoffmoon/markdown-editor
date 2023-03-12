import React from "react";

import MarkdownIt from "markdown-it";
import parse from "html-react-parser";

import { useContext } from "react";
import { TextContext } from "../context/textContext";

import Button from "./button.component";
import { ReactComponent as IconDownload } from "../icons/icon-download.svg";
import "../styles/preview.css";

const Preview = () => {
  const { text } = useContext(TextContext);
  const md = new MarkdownIt();
  console.log(text);
  const result = md.render(text ? text : "...");
  console.log(result);

  const saveAsPdf = () => {
    const element = document.querySelector(".preview__content").innerHTML;
    console.log(element);
    const newWindow = window.open("", "", "height=400, width=400");
    newWindow.document.write(element);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <>
      <h2 className="heading">Preview</h2>
      <div className="editor__controls">
        <Button
          className="btn"
          title="Export as .md"
          onClick={() => {
            saveAsPdf();
          }}
          content={<IconDownload />}
        />
      </div>

      <div className="preview__content">{parse(result)}</div>
    </>
  );
};

export default Preview;
