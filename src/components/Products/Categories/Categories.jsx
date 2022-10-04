import { Fragment, useState } from "react";
import styles from "./Categories.module.scss";
import Card from "../../UI/Card/Card";
import ProductFood from "../ProductFood/ProductFood";
import NamesAndIcons from "./names-icons/names-icons";

const Categories = (props) => {
  // This State to determine which country btn was clicked.
  const [country, setCountry] = useState("");
  const [isChooseCat, setIsChooseCat] = useState(false);
  // Receive icons & names via props
  const catIcons = props.icons;
  const catNames = props.names;

  const getCountryIndexHandler = (index) => {
    setCountry(catNames[index]);
    setIsChooseCat(true);
  };

  // Mapping on icons-array with getting the names.
  const categoriesBoxes = catIcons.map((icon, index) => (
    <div key={index}>
      <Card>
        <NamesAndIcons
          name={catNames[index]}
          icon={icon}
          index={index}
          getIndex={getCountryIndexHandler}
        />
      </Card>
    </div>
  ));

  return (
    <Fragment>
      <div className={styles.categories}>
        <h5>Choose your favorite type of food</h5>
        <div className={styles["food-categories"]}>{categoriesBoxes}</div>
      </div>
      <ProductFood country={country} isChooseCategory={isChooseCat} />
    </Fragment>
  );
};

export default Categories;
