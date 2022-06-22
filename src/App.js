import { createContext, useState } from 'react';
import styles from './App.module.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

export const modalContext = createContext({
  modal: true,
  customClick: () => {},
  customClick2: () => {},
});

const App = () => {
  const [modal, setModal] = useState(false);
  const modalOnHandler = () => {
    setModal(true);
  };
  const modalOffHandler = () => {
    setModal(false);
  };

  return (
    <modalContext.Provider
      value={{
        modal: modal,
        customClick: modalOffHandler,
        customClick2: modalOnHandler,
      }}
    >
      {modal && <Cart />}
      <Header />
      <main className={styles['walking-app']}>
        <Meals />
      </main>
    </modalContext.Provider>
  );
};

export default App;
