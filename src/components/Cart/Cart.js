import { useContext } from 'react';
import styles from './Cart.module.scss';
import Icon from '../../assets/Images/delivery.png';
import FoodContext from '../../store/food-context';

const Cart = (props) => {
  const ctx = useContext(FoodContext);
  const { items } = ctx;

  let totalItems = 0;
  for (let i = 0; i < items.length; i++) {
    totalItems += items[i].amount;
  }

  return (
    <button className={styles.cart}>
      <img src={Icon} alt="delivery-icon" />
      <h3>Cart</h3>
      <span>{totalItems}</span>
    </button>
  );
};

export default Cart;
