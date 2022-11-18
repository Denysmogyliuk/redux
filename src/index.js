import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import combineReducers from "./reducer";

import App from "./App";

const store = createStore(combineReducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
