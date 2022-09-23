import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Landing from "../../assets/Images/landing-img.jpg";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className={styles.landing}>
        <h1>
          Foody <span>Restaurant</span>
        </h1>
        <img src={Landing} alt="food-landing-img" />
      </div>
    </header>
  );
};

export default Header;
