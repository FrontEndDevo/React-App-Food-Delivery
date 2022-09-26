import styles from "./Categories.module.scss";
import Card from "../UI/Card/Card";
import ProductItem from "../Products/ProductItem/ProductItem";

import China from "../../assets/Images/China.png";
import Japan from "../../assets/Images/Japan.png";
import Italy from "../../assets/Images/Italy.png";
import Spain from "../../assets/Images/Spain.png";
import France from "../../assets/Images/France.png";
import Greece from "../../assets/Images/Greece.png";
import { Fragment, useState } from "react";

// Two arrays for handle the imported Food categories & their icons
const categoriesIcons = [China, Japan, Italy, Spain, France, Greece];
const categoriesNames = [
  "china",
  "japan",
  "italy",
  "Greece",
  "Spain",
  "France",
];

const Categories = () => {
  const [country,setCountry]=useState('');


  const filterFoodHandler = (event, key) => {
    setCountry(categoriesNames[key]);
  };

  // Mapping on icons-array with getting the names.
  const categoriesBoxes = categoriesIcons.map((icon, index) => (
    <Card>
      <img src={icon} alt="icon" />
      <button onClick={(event) => filterFoodHandler(event,index)} type="button">
        {categoriesNames[index]}
      </button>
    </Card>
  ));

  return (
    <Fragment>
      <div className={styles.categories}>
        <h5>Choose your favorite type of food</h5>
        <div className={styles["food-categories"]}>{categoriesBoxes}</div>
      </div>
      <ProductItem country={country} />
    </Fragment>
  );
};

export default Categories;
