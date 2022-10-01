import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Landing from "../../assets/Images/landing-img.jpg";
import RestaurantInfo from "../ResturantInfo/RestaurantInfo";
const Header = (props) => {
  return (
    <header>
      <Navbar onShow={props.onShowCart} />
      <div className={styles.landing}>
        <img src={Landing} alt="food-landing-img" />
      </div>
      <RestaurantInfo />
    </header>
  );
};

export default Header;
