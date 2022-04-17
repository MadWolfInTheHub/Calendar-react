import React, { useEffect } from 'react';


import './modal.scss';
import ModalForm from './ModalForm';

const Modal = ({setStartDate, displayedWeek, createEvent, setCreateEvent}) => {

  useEffect(() => {
    const onCloseModal = () => {
      setCreateEvent(!createEvent);
    };

    const closeModal = document.querySelector('.create-event__close-btn');
    closeModal.addEventListener('click', onCloseModal);
    return () => {
      closeModal.removeEventListener('click', onCloseModal);
    }
  })

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn">+</button>
          <ModalForm displayedWeek={displayedWeek} />
        </div>
      </div>
    </div>
  );

}

export default Modal;
