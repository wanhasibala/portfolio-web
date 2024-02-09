import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cursor from "./components/ui/Cursor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Cursor> */}
      <App />
    {/* </Cursor> */}
  </React.StrictMode>
);
