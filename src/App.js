import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import styles from "./App.module.scss";
import FoodProvider from "./store/food-provider";

function App() {
  return (
    <FoodProvider>
      <div className={styles.app}>
        <Header />
        <Products />
      </div>
    </FoodProvider>
  );
}

export default App;
