import styles from './Modal.module.css';
import Card from './Card';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const Background = ({ customClick }) => {
  return (
    <div onClick={customClick} className={styles.background}>
      {' '}
    </div>
  );
};

const portalEl = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Background customClick={props.customClick} />, portalEl)}
      {createPortal(
        <Card className={styles.layout}>{props.children}</Card>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
