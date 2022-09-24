import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import "./index.css";

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </Provider>
  </React.StrictMode>
);
