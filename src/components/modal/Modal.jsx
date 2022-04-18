import React, { useEffect } from 'react';


import './modal.scss';
import ModalForm from './ModalForm';

const Modal = ({setEventDay, eventDay, createEvent, setCreateEvent}) => {

  const onCloseModal = () => {
    setEventDay(new Date())
    setCreateEvent(!createEvent);
  };
    
  useEffect(() => {
    const modalCloseBtn = () => {
      onCloseModal()
    }

    const closeModal = document.querySelector('.create-event__close-btn');
    closeModal.addEventListener('click', modalCloseBtn);
    return () => {
      closeModal.removeEventListener('click', modalCloseBtn);
    }
  })

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn">+</button>
          <ModalForm 
          eventDay={eventDay} 
          onCloseModal={onCloseModal}
        />
        </div>
      </div>
    </div>
  );

}

export default Modal;
