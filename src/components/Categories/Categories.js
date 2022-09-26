import styles from "./Categories.module.scss";
import Card from "../UI/Card/Card";

import China from "../../assets/Images/China.png";
import Japan from "../../assets/Images/Japan.png";
import Italy from "../../assets/Images/Italy.png";
import Spain from "../../assets/Images/Spain.png";
import France from "../../assets/Images/France.png";
import Greece from "../../assets/Images/Greece.png";

// Two arrays for handle the imported icons & their names
const categoriesIcons = [China, Japan, Italy, Spain, France, Greece];
const categoriesNames = [
  "China",
  "Japan",
  "Italy",
  "Spain",
  "France",
  "Greece",
];

const Categories = () => {
  // Mapping on icons array with getting the names.
  const categoriesBoxes = categoriesIcons.map((icon, index) => (
    <Card>
      <img src={icon} alt="icon" />
      <button type="button">{categoriesNames[index]}</button>
    </Card>
  ));

  return (
    <div className={styles.categories}>
      <h5>Choose your favorite type of food</h5>
      <div className={styles["food-categories"]}>{categoriesBoxes}</div>
    </div>
  );
};

export default Categories;
