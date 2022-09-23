import styles from "./Categories.module.scss";
import all from "../../assets/Images/all.png";
import food from "../../assets/Images/food.png";
import fruits from "../../assets/Images/fruits.png";
import drinks from "../../assets/Images/drinks.png";
import iceCream from "../../assets/Images/ice-creams.png";
import Card from "../UI/Card/Card";
// Two arrays for handle the imported icons & their names
const categoriesIcons = [all, food, fruits, drinks, iceCream];
const categoriesNames = ["All", "Food", "Fruits", "Drinks", "Ice Cream"];
const Categories = () => {
  // Mapping on icons array with getting the names.
  const categoriesBoxes = categoriesIcons.map((icon, index) => (
    <Card>
      <img src={icon} alt="icon" />
      <button type="button">{categoriesNames[index]}</button>
    </Card>
  ));

  return <div className={styles.categories}>{categoriesBoxes}</div>;
};

export default Categories;
