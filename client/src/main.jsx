import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
