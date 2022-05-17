import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css';
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./providers";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
