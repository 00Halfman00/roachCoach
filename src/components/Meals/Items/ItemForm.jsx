import Input from "../../UI/Input";
import styles from './ItemForm.module.css';

const ItemForm = () => {
  return (
    <form className={styles.itemForm}>
      <Input label='Amount' input = {{
        id: 'amount',
        type: 'number',
        defaultValue: '1',
        min: '1',
        max: '6'
      }}/>
      <button>Add</button>
    </form>
  );
};

export default ItemForm;