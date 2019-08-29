import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { AuthContextProvider } from "./contexts/authentication";
import { NotificationProvider } from "./contexts/notification";

ReactDOM.render(
  <AuthContextProvider>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
