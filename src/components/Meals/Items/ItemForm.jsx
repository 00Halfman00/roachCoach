import Input from "../../UI/Input";
import styles from './ItemForm.module.css';

const ItemForm = (props) => {
  console.log(props)
  const clickHandler = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className={styles.itemForm}>
      <Input label='Quantity' input = {{
        id: 'quantity' + props.id,
        type: 'number',
        defaultValue: '1',
        min: '1',
        max: '6'
      }}/>
      <button className={styles['form-input-btn']} onClick={clickHandler}>Add</button>
    </form>
  );
};

export default ItemForm;
