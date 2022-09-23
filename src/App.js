import Header from "./components/Header/Header";
import { Fragment } from "react";
import Products from "./components/Products/Products";
import styles from './App.module.scss';


function App() {
  return (
    <Fragment>
      <div className={styles.app}>
        <Header />
        <Products />
      </div>
    </Fragment>
  );
}

export default App;
