import { useContext } from 'react';
import { modalContext } from '../../App';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderButton.module.css';

const HeaderButton = () => {
  const ctx = useContext(modalContext);
  return (
    <button onClick={ctx.customClick2} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <div className={styles.container}>
        <p className={styles.cart}>Cart</p>
        <p className={styles.num}>$</p>
      </div>
    </button>
  );
};

export default HeaderButton;
