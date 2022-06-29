import { Fragment, useState, useContext } from 'react';
import styles from './App.module.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import cartContext from './components/store/CartContext';

const App = () => {
  const [modal, setModal] = useState(false);
  const ctx = useContext(cartContext);
  const modalOnHandler = () => {
    setModal(true);
  };
  const modalOffHandler = () => {
    setModal(false);
    //ctx.setCart([]);
    //ctx.setTotal(0);
    //ctx.setCount(0);
  };
  //console.log(ctx)
  return (
    <Fragment>
      {modal && <Cart {...ctx} customClick={modalOffHandler} />}
      <Header customClick={modalOnHandler} />
      <main className={styles['walking-app']}>
        <Meals {...ctx} />
      </main>
    </Fragment>
  );
};

export default App;
