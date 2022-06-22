import styles from './Modal.module.css';
import Card from './Card';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const Background = () => {
  return <div className={styles.background}> </div>
}

const portalEl = document.getElementById('overlay');

const Modal = props => {
  return (
    <Fragment>
      {createPortal(<Background />, portalEl)}
      {createPortal(<Card className={styles.layout}>{props.children}</Card>, portalEl)}
    </Fragment>
  )
};

export default Modal;
