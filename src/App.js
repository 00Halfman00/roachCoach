import { Fragment } from 'react';
import styles from './App.module.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Fragment >
      <Header />
      <main className={styles['walking-app']}>
      <Meals />
      <Cart />
      </main>
    </Fragment>
  );
};

export default App;
