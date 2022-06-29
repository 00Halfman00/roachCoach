import styles from './Input.module.css';

const Input = (props) => {
  //console.log(props)
  const inputHandler = (ev) => {
    console.log('input: ', ev.target.value, props)
    props.setQuantity(+ev.target.value)
  }

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={props.input.id} className={styles.amountLabel} >{props.label}
      </label>
      <input onChange={inputHandler} className={styles.formInput} {...props.input}/>
    </div>
  )
};

export default Input;
