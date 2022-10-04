import { useEffect, useState } from "react";
import classes from "./ProductFood.module.scss";
import ProductItem from "../ProductItem/ProductItem";

const ProductFood = (props) => {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get choosen country from props
  const choosenCountry = props.country; // country name
  const isUserChoose = props.isChooseCategory; // true or false

  useEffect(() => {
    // Fetch food data from (Firebase)
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://food-delivery-b0655-default-rtdb.firebaseio.com/food/${choosenCountry}.json`
      );

      if (!response.ok) {
        throw new Error("Request Failed!");
      }
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
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setError(error.message || "Something went wrong!");
      setIsLoading(false);
    });
  }, [choosenCountry]);

  if (!isUserChoose)
    return (
      <p className={classes["no-items"]}>There are no food items right now.</p>
    );

  if (isLoading) return <p className={classes["loading"]}>Loading...</p>;

  if (error) return <p className={classes["error"]}>{error}</p>;

  // Start Mapping and push the result to ProductItem component.
  const foodItems = food.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      type={item.type}
      price={item.price}
    />
  ));

  return <ul className={classes.products}>{foodItems}</ul>;
};

export default ProductFood;
