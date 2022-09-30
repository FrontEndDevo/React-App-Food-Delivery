import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import FoodProvider from "./store/food-provider";

function App() {
  return (
    <FoodProvider>
      <div className='app'>
        <Header />
        <Products />
      </div>
    </FoodProvider>
  );
}

export default App;
