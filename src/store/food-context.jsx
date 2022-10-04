import { createContext } from "react";

const FoodContext = createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default FoodContext;
