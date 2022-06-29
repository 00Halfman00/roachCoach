import MenuItems from './MenuItems';
import Card from '../UI/Card';
import MenuIntro from './MenuIntro';
import styles from './Meals.module.css';

const Meals = (props) => {
  //console.log(props)
  return (
    <Card className={styles.menuCard}>
      <MenuIntro />
      <MenuItems cart={props.cart} setCart={props.setCart}/>
    </Card>
  );
};

export default Meals;
