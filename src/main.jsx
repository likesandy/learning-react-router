import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";

// router@6.3
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback="loading~~">
      <App />
    </Suspense>
  </BrowserRouter>
);
