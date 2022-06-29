import cartContext from '../store/CartContext';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cart1 = (
    <ul className={styles['cart-ul']}>
      {props.cart.map((item) => (
        <li key={item.id} id={item.id}>
          <span>({item.count} order/s) </span>
          <span>{item.name}: </span>
          <span> ${item.price}</span>
          <span>  (quantity: {item.quantity})</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal customClick={props.customClick}>
      <div className={styles['cart-div']}>
        {cart1}
        <div className={styles['total-div']}>
          <span className={styles.total}>Total: ${props.total}</span>
        </div>
        <div className={styles['btn-action']}>
          <button onClick={props.customClick} className={styles.cancel}>
            cancel
          </button>
          <button className={styles.order}>order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
