import { Fragment } from 'react';

import HeaderButton from './HeaderButton';

import styles from './Header.module.css';
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.h1}>RoachCoach.com</h1>
        <HeaderButton customClick={props.customClick} />
      </header>
      <div>
        <img
          src="https://www.bobistheoilguy.com/forums/attachments/usergals/2019/07/full-52831-34343-ayex95wvqynfd1o82kkj_20141111_131655.jpg"
          alt="food truck"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
