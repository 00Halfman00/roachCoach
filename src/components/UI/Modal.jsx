import styles from './Modal.module.css';
import Card from './Card';
import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import { modalContext } from '../../App';

const Background = ({ customClick }) => {
  return (
    <div onClick={customClick} className={styles.background}>
      {' '}
    </div>
  );
};

const portalEl = document.getElementById('overlay');

const Modal = (props) => {
  const ctx = useContext(modalContext);
  return (
    <Fragment>
      {createPortal(<Background customClick={ctx.customClick} />, portalEl)}
      {createPortal(
        <Card customClick={ctx.customClick} className={styles.layout}>
          {props.children}
        </Card>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
