import { Fragment, useEffect, useState } from "react";
import classes from "./ProductItem.module.scss";

const ProductItem = (props) => {
  // States to mange data loading and errors
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const choosenCounrty = props.country;
  const foodItems = {};

  // Fetch food data from (Firebase)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://food-delivery-b0655-default-rtdb.firebaseio.com/food/${choosenCounrty}.json`
      );

      if (!response.ok) throw new Error("Fetch food failed!");

      const data = await response.json();

      // console.log(data);
      console.log(data);
    };

    try {
      fetchData();
      setIsLoading(false);
    } catch (error) {
      setError(error || "Something went wrong!");
    }
  }, [choosenCounrty]);

  return (
    <div className={classes.products}>
      <div className={classes['food-box']}>
            <div className={classes["food-info"]}>
              <h4>foodName</h4>
              <h6>foodType</h6>
              <span>$12.5</span>
            </div>

            <div className={classes["add-to-cart"]}>
              <input type="number" />
              <button>+ Add</button>
            </div>
      </div>
    </div>
  );
};

export default ProductItem;
