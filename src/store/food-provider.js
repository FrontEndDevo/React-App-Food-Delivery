import { useReducer } from "react";
import FoodContext from "./food-context";

const initialFood = {
  // items: [
  //   {
  //     name: "Tomato Basil Soup",
  //     price: 9.1,
  //     amount:1,
  //     id:"f1",
  //   },
  //   {
  //     name: "4 piece Chicken Strips",
  //     price: 99.4,
  //     amount:1,
  //     id:"f2",
  //   },
  //   {
  //     name: "picy Southwest Salad",
  //     price: 18.6,
  //     amount:1,
  //     id:"f3",
  //   },
  //   {
  //     name: "Small Waffle Fries",
  //     price: 62.7,
  //     amount:1,
  //     id:"f4",
  //   },
  //   {
  //     name: "Sausage Egg and Cheese Biscuit",
  //     price: 126.5,
  //     amount:1,
  //     id:"f5",
  //   },
  // ],
  items:[],
  totalPrice: 0,
};

const foodReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;

    const existItemIndex = state.items.findIndex(
      (singleItem) => singleItem.id === action.item.id
    );

    const existingItem = state.items[existItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "DELETE") {
    const existItemIndex = state.items.findIndex(
      (itemId) => itemId.id === action.id
    );

    const existItem = state.items[existItemIndex];

    const updatedTotalPrice = state.totalPrice - existItem.price;

    let updatedItems;

    if (existItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existItem, amount: existItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  return initialFood;
};

const FoodProvider = (props) => {
  const [foodProducts, dispatchFoodProducts] = useReducer(
    foodReducer,
    initialFood
  );

  const addItemToCartHandler = (item) => {
    dispatchFoodProducts({ type: "ADD", item });
  };

  const deleteItemFromCartHandler = (id) => {
    dispatchFoodProducts({ type: "DELETE", id });
  };

  const foodDetails = {
    items: foodProducts.items,
    totalPrice: foodProducts.totalPrice,
    addItem: addItemToCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <FoodContext.Provider value={foodDetails}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
