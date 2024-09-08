import store from "./store";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function Previewer() {
  const [previewer, setPreviewer] = useState(store.getState().text);
  store.subscribe(() => {
    setPreviewer(store.getState().text);
  });
  return (
    <div
      id="preview"
      className=" border border-1 border-black rounded bg-white mt-3 p-2"
    >
      <ReactMarkdown>{previewer}</ReactMarkdown>
    </div>
  );
}

export default Previewer;
