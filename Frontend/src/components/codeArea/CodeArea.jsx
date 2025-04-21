import React, { useEffect, useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "./codeArea.css"

const CodeArea = ({code, setcode}) => {
  const editorRef = useRef(null);


  return (
      <div ref={editorRef} className="code">
        <Editor
          autoFocus
          placeholder="Paste Code Here..."
          value={code}
          onValueChange={(value) => setcode(value)}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          style={{
            outline: "none",
            fontFamily: '"Fira code, "Fira Mono, monospace',
            fontSize: 16,
            border: "0.1px solid #rgb(30 30 30)",
            borderRadius: "5px",
          }}
        />
      </div>
  );
};

export default CodeArea;
