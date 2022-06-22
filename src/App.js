import { Fragment, useState } from 'react';
import styles from './App.module.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [modal, setModal] = useState(false);
  const modalOnHandler = () => {
    setModal(true);
  };
  const modalOffHandler = () => {
    setModal(false);
  };

  return (
    <Fragment>
      {modal && <Cart customClick={modalOffHandler} />}
      <Header customClick={modalOnHandler} />
      <main className={styles['walking-app']}>
        <Meals customClick={modal} />
      </main>
    </Fragment>
  );
};

export default App;
