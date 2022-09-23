import styles from './Cart.module.scss';
import Icon from '../../assets/Images/delivery.png';

const Cart = (props) => {
  return (
      <div className={styles.cart}>
        <img src={Icon} alt="delivery-icon" />
        <h3>Cart</h3>
        <span>10</span>
      </div>
  );
};

export default Cart;
