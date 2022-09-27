import { useContext, useEffect, useState } from "react";
import classes from "./ProductItem.module.scss";
import FoodContext from "../../../store/food-context";

const ProductItem = (props) => {
  // States to mange data loading and errors
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //  using Context to store our food-data,
  //  so that we don't have to fetch it every re-rendered
  const foodCtx = useContext(FoodContext);

  // Here I used useEffect, because I will store the fetched data in Context,
  // So I don't have to fetch the same data every re-evaluated.
  useEffect(() => {
    // Fetch food data from (Firebase)
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://food-delivery-b0655-default-rtdb.firebaseio.com/food.json`
      );

      if (!response.ok) throw new Error("Fetch food failed!");

      const data = await response.json();

      // Assign data to our context.
      foodCtx.countries = data;
    };

    try {
      fetchData();
      setIsLoading(false);
    } catch (error) {
      setError(error || "Something went wrong!");
    }
  }, [foodCtx]);

  // Determine which country has been choosen.
  const countryFood = foodCtx.countries[props.country];

  // Convert the choosen country object to an array to map.
  const countriesArray = [];
  for (const key in countryFood) {
    countriesArray.push(countryFood[key]);
  }

  // Start Mapping and return the result below.
  const foodItems = countriesArray.map((foodItem) => (
    <div key={foodItem.foodPrice} className={classes["food-box"]}>
      <div className={classes["food-info"]}>
        <h4>{foodItem.foodName}</h4>
        <h6>{foodItem.foodType}</h6>
        <span>{`$${foodItem.foodPrice}`}</span>
      </div>

      <div className={classes["add-to-cart"]}>
        <input type="number" max='20' min='1' value='1'/>
        <button>+ Add</button>
      </div>
    </div>
  ));

  // Control which will be return below:
  let content = (
    <p className={classes["no-items"]}>There are no items right now.</p>
  );

  if (!error && isLoading)
    content = <p className={classes["loading"]}>Loading items...</p>;

  if (error && !isLoading)
    content = <p className={classes["error"]}>{error}</p>;

  if (foodItems.length > 0 && !isLoading && !error) content = foodItems;

  return <div className={classes.products}>{content}</div>;
};

export default ProductItem;
