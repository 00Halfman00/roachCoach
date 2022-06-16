import Item from './Items/Item';
import styles from './MenuItems.module.css';

const menu = [
  {
    id: 'a1',
    name: 'steak tacos',
    what: '3 grilled skirt steak on corn tortilla with onions and cilantro',
    price: 9.99,
  },
  {
    id: 'b2',
    name: 'chicken torta',
    what: 'grilled chicken on a bun with lettuce and tomato',
    price: 7.99,
  },
  {
    id: 'c3',
    name: 'pizza slice',
    what: 'slice of thin crust, sausage pizza',
    price: 4.99,
  },
  {
    id: 'd4',
    name: 'cheese burger',
    what: '1/4 lb beef patty on a sesame bun with lettuce and tomato',
    price: 5.99,
  },
  {
    id: 'e5',
    name: 'juice',
    what: 'chose from half a dozen juice flavors',
    price: 2.99,
  },
  {
    id: 'f6',
    name: 'pop',
    what: 'choose from half a dozen soda flavors',
    price: 2.52,
  },
  {
    id: 'g7',
    name: 'coffee',
    what: "bottomless cup of coffee while truck's around",
    price: 3.51,
  },
];

const MenuItems = () => {
  return (
    <ul className={styles.ul}>
      {menu.map((item) => (
        <Item id={item.id} key={item.id}>
          <div className={styles.itemContainer}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.what}>~~  {item.what}  ~~</p>
            <p className={styles.price}>${item.price}</p>
          </div>
        </Item>
      ))}
    </ul>
  );
};

export default MenuItems;
