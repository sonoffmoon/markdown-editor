import { useContext } from "react";
import { TextContext } from "../context/textContext";

import "../styles/editor.css";

const Editor = () => {
  const { text, setText } = useContext(TextContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <textarea
        className="markdown-input"
        onChange={handleChange}
        placeholder={"Start writing yout markdown here..."}
      ></textarea>
    </>
  );
};

export default Editor;
