import { useContext } from "react";
import { TextContext } from "../context/textContext";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Button from "./button.component";
import { ReactComponent as IconDownload } from "../icons/icon-download.svg";
import "../styles/preview.css";

const Preview = () => {
  const { text } = useContext(TextContext);

  return (
    <>
      <h2 className="heading">Preview</h2>
      <div className="controls">
        <Button
          className="btn"
          title="Export as .pdf "
          onClick={() => {}}
          content={<IconDownload />}
        />
      </div>

      <div className="preview-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {text ? text : "..."}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Preview;
