import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
 document.getElementById("root") as HTMLElement
);
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <App />
    </PersistGate>
   </Provider>
  </BrowserRouter>
 </React.StrictMode>
);
