import { createContext } from "react";

const FoodContext = createContext({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addItem: (item) => { },
  deleteItem:(id)=>{},
})

export default FoodContext;