import store from "./store";
import { useState } from "react";
function Editor() {
  const handleChange = (e) => {
    store.dispatch({ type: "CHANGING", payload: e.target.value });
    setEditor(store.getState().text);
  };
  const [editor, setEditor] = useState(store.getState().text);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <textarea
          id="editor"
          className="mt-3 border-1 border-dark rounded col-6"
          value={editor}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  );
}
export default Editor;
