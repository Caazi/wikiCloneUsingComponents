import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Components/Header.jsx";
import Contents from "./Components/Content.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mainContainer">
      <Search />
      <Contents />
    </div>
  </React.StrictMode>
);
