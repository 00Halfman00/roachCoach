import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderButton.module.css';
import cartContext from '../store/CartContext';

const HeaderButton = (props) => {
  const ctx = useContext(cartContext);

  return (
    <button onClick={props.customClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <div className={styles.container}>
        <p className={styles.cart}>Cart</p>
        <p className={styles.num}>{ctx.count ? ctx.count : ''}</p>
      </div>
    </button>
  );
};

export default HeaderButton;
