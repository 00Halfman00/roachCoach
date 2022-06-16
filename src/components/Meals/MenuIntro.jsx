import styles from './MenuIntro.module.css';

const MenuIntro = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.saying}>Tasty Food that Comes to you</h1>
      <p className={styles.para}>
        Choose from one of our many hot and ready meal items and wash it down
        with an ice cold bevarage or a cup of coffee.
      </p>
      <p className={styles.para}>
        All our meals are prepared fresh each day, kept warm and driven to your location.
      </p>
    </section>
  );
};

export default MenuIntro;
