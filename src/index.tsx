import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./main";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
