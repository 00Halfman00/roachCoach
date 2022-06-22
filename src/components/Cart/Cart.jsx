import styles from './Cart.module.css';

const Cart = () => {
  const cart = <ul className={styles['cart-ul']}>{[ {
    id: 'c3',
    name: 'pizza slice',
    what: 'slice of thin-crust, sausage pizza',
    price: 4.99,
  },
  {
    id: 'h8',
    name: 'water',
    what: "ice-cold bottle of water",
    price: 1.51,
  }
  ].map( item => (
    <li key={item.id} id={item.id}><span>{item.name}: </span><span> ${item.price}</span></li>
  ))}</ul>;
  return (
    <div className={styles['cart-div']}>
      {cart}
      <div className={styles['total-div']}>
        <span className={styles.total}>Total: $6.50</span>
      </div>
      <div className={styles['btn-action']}>
        <button className={styles.cancel}>cancel</button>
        <button className={styles.order}>order</button>
      </div>
    </div>
  );
};

export default Cart;
