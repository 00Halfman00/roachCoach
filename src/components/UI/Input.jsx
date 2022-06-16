import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.inputDiv}>
      <label htmlFor={props.input.id} className={styles.amountLabel} >{props.label}
      </label>
      <input  className={styles.formInput} {...props.input}/>
    </div>
  )
};

export default Input;
