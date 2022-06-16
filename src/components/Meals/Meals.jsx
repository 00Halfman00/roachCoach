import MenuItems from './MenuItems';
import Card from '../UI/Card';
import MenuIntro from './MenuIntro';
import styles from './Meals.module.css';

const Meals = () => {
  return (
    <Card className={styles.menuCard}>
      <MenuIntro />
      <MenuItems />
    </Card>
  );
};

export default Meals;
