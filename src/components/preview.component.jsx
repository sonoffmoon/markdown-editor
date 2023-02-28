import { useContext } from "react";
import { TextContext } from "../context/textContext";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../styles/preview.css";

const Preview = () => {
  const { text } = useContext(TextContext);

  return (
    <div className="preview-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {text ? text : "..."}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
