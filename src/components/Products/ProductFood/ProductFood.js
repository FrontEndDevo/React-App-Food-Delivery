import { useEffect, useState } from "react";
import classes from "./ProductFood.module.scss";
import ProductItem from "../ProductItem/ProductItem";

const ProductFood = (props) => {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch food data from (Firebase)
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://food-delivery-b0655-default-rtdb.firebaseio.com/food.json`
      );

      if (!response.ok) throw new Error("Fetch food failed!");

      const data = await response.json();

      let loadedData = [];
        // Handling fetched data and store data in an array.
      for (const key in data) {
        loadedData.push({
          id: data[key],
          name: data[key].foodName,
          type: data[key].foodType,
          price: data[key].foodPrice,
        });
      }
      setFood(loadedData);
    };

    try {
      fetchData();
      setIsLoading(false);
    } catch (error) {
      setError(error || "Something went wrong!");
    }
  }, []);

  // Determine which country has been choosen.
  const choosenCountry = props.country;


  const changeInputHandler = (event, index) => {
    setInputValue({ value: event.target.value, index });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(countriesArray[inputValue.index]);
    console.log(inputValue.value);
    console.log(inputValue.index);
    // setInputValue({ value: null, index: null });
  };



  if (error)
    return (
      <div className={classes.products}>
        <p className={classes["error"]}>{error}</p>;
      </div>
    );

  if (isLoading)
    return (
      <div className={classes.products}>
        <p className={classes["loading"]}>Loading...</p>;
      </div>
    );

  // Start Mapping and return the result below.
  const foodItems = food.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      type={item.type}
      price={item.price}
    />
  ));

  if (foodItems.length <= 0)
    return <p className={classes["no-items"]}>There are no items right now.</p>;

  return (
    <div className={classes.products}>
      <ul>{foodItems}</ul>
    </div>
  );
};

export default ProductFood;
