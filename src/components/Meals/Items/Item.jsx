import styles from './Item.module.css';
import ItemForm from './ItemForm';

const Item = (props) => {
  return (
    <li className={styles.listItem}>
      {props.children}
      <ItemForm {...props}/>
    </li>
  )
}

export default Item;
