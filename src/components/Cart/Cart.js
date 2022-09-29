import { useContext } from 'react';
import styles from './Cart.module.scss';
import Icon from '../../assets/Images/delivery.png';
import FoodContext from '../../store/food-context';

const Cart = (props) => {
  const foodCtx = useContext(FoodContext);

  return (
    <button className={styles.cart}>
      <img src={Icon} alt="delivery-icon" />
      <h3>Cart</h3>
      <span>{foodCtx.totalItems}</span>
    </button>
  );
};

export default Cart;
