import { useContext, useEffect, useState } from "react";
import classes from "./ProductFood.module.scss";
import FoodContext from "../../../store/food-context";

const ProductFood = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [isTouched, setIsTouched] = useState(false);
  //  using Context to store our food-data,
  //  so that we don't have to fetch it every re-rendered
  const foodCtx = useContext(FoodContext);

  // Here I used useEffect, because I will store the fetched data in Context,
  // So I don't have to fetch the same data every re-evaluated.
  useEffect(() => {
    // Fetch food data from (Firebase)
    const fetchData = async () => {
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
    } catch (error) {
      console.log(error || "Something went wrong!");
    }
  }, [foodCtx]);

  // Determine which country has been choosen.
  const countryFood = foodCtx.countries[props.country];

  // Convert the choosen country object to an array to map.
  const countriesArray = [];
  for (const key in countryFood) {
    countriesArray.push(countryFood[key]);
  }

  const changeInputHandler = (event, index) => {
    setIsTouched(true);
    setInputValue({ value: event.target.value, index });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(countriesArray[inputValue.index]);
    console.log(inputValue.value);
    console.log(inputValue.index);
    // setInputValue({ value: null, index: null });
  };

  // Start Mapping and return the result below.
  const foodItems = countriesArray.map((foodItem, index) => (
    <div className={classes["food-box"]}>
      <div className={classes["food-info"]}>
        <h4>{foodItem.foodName}</h4>
        <h6>{foodItem.foodType}</h6>
        <span>{`$${foodItem.foodPrice}`}</span>
      </div>

      <form onSubmit={submitFormHandler} className={classes["add-to-cart"]}>
        <input
          key={index}
          id={index}
          type="number"
          min="1"
          max="20"
          step="1"
          defaultValue="1"
          onChange={(event) => changeInputHandler(event, index)}
        />
        <button type="submit" disabled={!isTouched}>
          + Add
        </button>
      </form>
    </div>
  ));

  return (
    <div className={classes.products}>
      {foodItems.length <= 0 && (
        <p className={classes["no-items"]}>There are no items right now.</p>
      )}
      {foodItems.length > 0 && foodItems}
    </div>
  );
};

export default ProductFood;
