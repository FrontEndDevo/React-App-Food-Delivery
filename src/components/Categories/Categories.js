import { Fragment, useState } from "react";
import styles from "./Categories.module.scss";
import Card from "../UI/Card/Card";
import ProductFood from "../Products/ProductFood/ProductFood";

const Categories = (props) => {
  // This State to determine which country btn was clicked.
  const [country, setCountry] = useState("");

  // Receive icons & names via props
  const catIcons = props.icons;
  const catNames = props.names;

  const filterFoodHandler = (event, key) => {
    setCountry(catNames[key]);
  };

  // Mapping on icons-array with getting the names.
  const categoriesBoxes = catIcons.map((icon, index) => (
    <Card>
      <img src={icon} alt="icon" />
      <button
        onClick={(event) => filterFoodHandler(event, index)}
        type="button"
      >
        {catNames[index]}
      </button>
    </Card>
  ));

  return (
    <Fragment>
      <div className={styles.categories}>
        <h5>Choose your favorite type of food</h5>
        <div className={styles["food-categories"]}>{categoriesBoxes}</div>
      </div>
      <ProductFood country={country} />
    </Fragment>
  );
};

export default Categories;
