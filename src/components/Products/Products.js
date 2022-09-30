import Categories from "../Products/Categories/Categories";
import classes from "./Products.module.scss";

// Importing Icons
import China from "../../assets/Images/China.png";
import Japan from "../../assets/Images/Japan.png";
import Italy from "../../assets/Images/Italy.png";
import Spain from "../../assets/Images/Spain.png";
import France from "../../assets/Images/France.png";
import Greece from "../../assets/Images/Greece.png";


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

const Products = () => {
  return (
    <div className={classes.products}>
      <Categories icons={categoriesIcons} names={categoriesNames} />
    </div>
  );
};
export default Products;
