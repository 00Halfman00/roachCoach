import Item from './Items/Item';
import styles from './MenuItems.module.css';

const menu = [
  {
    id: 'a1',
    name: 'steak tacos',
    what: '3 skirt-steak tacos on corn tortilla with onions and cilantro',
    price: 9.99,
    count: 0
  },
  {
    id: 'b2',
    name: 'chicken torta',
    what: 'grilled chicken breast on a bun with lettuce and tomato',
    price: 7.99,
    count: 0
  },
  {
    id: 'c3',
    name: 'pizza slice',
    what: 'slice of thin-crust, sausage pizza',
    price: 4.99,
    count: 0
  },
  {
    id: 'd4',
    name: 'cheese burger',
    what: '1/4 lb beef patty on a sesame bun with cheese, lettuce and tomato',
    price: 5.99,
    count: 0
  },
  {
    id: 'e5',
    name: 'juice',
    what: 'choose from half a dozen juice flavors',
    price: 2.99,
    count: 0
  },
  {
    id: 'f6',
    name: 'pop',
    what: 'choose from half a dozen soda flavors',
    price: 2.52,
    count: 0
  },
  {
    id: 'g7',
    name: 'coffee',
    what: "bottomless cup of coffee while truck's around",
    price: 3.51,
    count: 0
  },
  {
    id: 'h8',
    name: 'water',
    what: "ice-cold bottle of water",
    price: 1.51,
    count: 0
  },
  {
    id: 'i9',
    name: 'chips',
    what: "choose from half a dozen flavors",
    price: 1.51,
    count: 0
  }
];

const MenuItems = (props) => {
  //console.log(props)
  return (
    <ul className={styles.ul}>
      {menu.map((item) => (
        <Item id={item.id} key={item.id} name={item.name} price={item.price} what={item.what} cart={props.cart} setCart={props.setCart} count={item.count}>
          <div className={styles.itemContainer}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.what}> ~~ {item.what} ~~ </p>
            <p className={styles.price}>${item.price}</p>
          </div>
        </Item>
      ))}
    </ul>
  );
};

export default MenuItems;
