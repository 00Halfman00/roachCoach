import Input from "../../UI/Input";
import styles from './ItemForm.module.css';

const ItemForm = (props) => {
  //console.log(props)
  return (
    <form className={styles.itemForm}>
      <Input label='Quantity' input = {{
        id: 'quantity' + props.id,
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
