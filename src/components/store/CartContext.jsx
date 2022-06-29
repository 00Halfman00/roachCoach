import { useState, createContext } from 'react';

const cartContext = createContext({
  cart: [],
  total: 0,
  count: 0,
  setCart: () => {},
  setTotal: () => {},
  setCount: () => {}
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  //console.log(cart)
  return (
    <cartContext.Provider
      value={{
        cart: cart,
        total: total,
        count: count,
        setCart: setCart,
        setTotal: setTotal,
        setCount: setCount
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
