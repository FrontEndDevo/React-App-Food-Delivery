import { Fragment, useEffect, useState } from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = (props) => {
  // States to mange data loading and errors
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const choosenCounrty = props.country;
  // Fetch food data from (Firebase)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://food-delivery-b0655-default-rtdb.firebaseio.com/food/${choosenCounrty}.json`
      );

      if (!response.ok) throw new Error("Fetch food failed!");

      const data = await response.json();
      console.log(data);
    };

    try {
      fetchData();
      setIsLoading(false);
    } catch (error) {
      setError(error || "Something went wrong!");
    }
  }, [choosenCounrty]);

  return <Fragment>FoodItems</Fragment>;
};

export default ProductItem;
