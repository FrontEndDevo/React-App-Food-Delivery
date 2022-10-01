import { createContext } from "react";

const FoodContext = createContext({
  items: [
    { name: "Ham Egg and Cheese Sandwich", type: "Sandwich", price: "20.5" },
  ],
  totalItems: 0,
  totalPrice: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default FoodContext;
