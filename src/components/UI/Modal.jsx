import styles from './Modal.module.css';
import Card from './Card';
import { Fragment, useState, createContext } from 'react';
import { createPortal } from 'react-dom';

const modalContext = createContext({
  modal: true,
  customClick: () => {}
});

const Background = ({customClick}) => {
  return <div onClick={customClick} className={styles.background}> </div>
}

const portalEl = document.getElementById('overlay');

const Modal = props => {
  const [modal, setModal] = useState(true);
  const modalHandler = () => {
    console.log('clicked')
    setModal(!modal);
  }

  return (
    <Fragment>
      {modal && createPortal(<Background customClick={modalHandler}/>, portalEl)}
      {modal && createPortal(<Card customClick={modalHandler} className={styles.layout}>{props.children}</Card>, portalEl)}
    </Fragment>
  )
};

export default Modal;
