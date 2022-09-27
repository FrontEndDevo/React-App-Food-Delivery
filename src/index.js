import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FoodContext from "./store/food-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodContext.Provider
    value={{
      countries: [],
      totalItems: 0,
    }}
  >
    <App />
  </FoodContext.Provider>
);
