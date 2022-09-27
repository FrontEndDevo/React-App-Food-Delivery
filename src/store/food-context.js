import { createContext } from "react";

const FoodContext = createContext({
  countries: [],
  totalItems:0,
})

export default FoodContext;