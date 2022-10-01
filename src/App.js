import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import FoodProvider from "./store/food-provider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const onShowHandler = () => {
    setShowCart(true);
  };

  const onCloseHandler = () => {
    setShowCart(false);
  }

  return (
    <FoodProvider>
      <div className="app">
        {showCart && <Cart onClose={onCloseHandler} />}
        <Header onShowCart={onShowHandler} />
        <Products />
      </div>
    </FoodProvider>
  );
};

export default App;
