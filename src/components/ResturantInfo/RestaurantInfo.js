import styles from "./RestaurantInfo.module.scss";

const RestaurantInfo = () => {
  return (
    <div className={styles.restaurant}>
      
      <div>
        <h3>Our food is healthy and delicious too</h3>
        <h4>Our delivery is the fastest delivery</h4>
      </div>

      <div>
        <p>
          Choose your favorite meal from our world broad selection of available
          meals and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>

    </div>
  );
};

export default RestaurantInfo;
