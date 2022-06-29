import { useContext, useState } from 'react';
import Input from '../../UI/Input';
import styles from './ItemForm.module.css';
import cartContext from '../../store/CartContext';

const ItemForm = (props) => {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(cartContext);

  const clickHandler = (ev) => {
    ev.preventDefault();
    let num;
    let amount = quantity;
    if (props.cart[0]) {
      const container = [];
      for (let i = 0; i < props.cart.length; ++i) {
        if (props.cart[i].id !== props.id) {
          container[container.length] = props.cart[i];
        }
        if (props.cart[i].id === props.id) {
          num = props.cart[i].count + 1;
          amount = props.cart[i].quantity + quantity;
          setQuantity(() => {
            return props.cart[i].quantity + quantity;
          })
        }
        if (!num) {
          num = 1;
        }
      }

      props.setCart(() => {
        return [
          {
            id: props.id,
            name: props.name,
            price: props.price,
            what: props.what,
            count: num,
            quantity: amount
          },
          ...container,
        ];
      });
    } else {
      props.setCart(() => {
        return [
          {
            id: props.id,
            name: props.name,
            price: props.price,
            what: props.what,
            count: 1,
            quantity: amount
          },
        ];
      });
    }

    let tmp = ctx.total + props.price * quantity + '';
    let money = '';
    for (let j = 0; j < tmp.length; ++j) {
      money += tmp[j];
      if (tmp[j + 1] === '.') {
        money += '.';
        money += tmp[j + 2];
        money += tmp[j + 3];
        break;
      }
    }

    ctx.setTotal(() => {
      return +money;
    });
    ctx.setCount(() => {
      return ctx.count + 1;
    });
  };

  return (
    <form className={styles.itemForm}>
      <Input
        quantity={quantity}
        setQuantity={setQuantity}
        label="Quantity"
        input={{
          id: 'quantity' + props.id,
          type: 'number',
          defaultValue: '1',
          min: '1',
          max: '6',
        }}
      />
      <button className={styles['form-input-btn']} onClick={clickHandler}>
        Add
      </button>
    </form>
  );
};

export default ItemForm;
