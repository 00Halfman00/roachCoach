import styles from './Card.module.css';

const Card = props => {
  return (
    <div onClick={props.customClick} className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
