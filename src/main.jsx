import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import Router from "@/Router.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
