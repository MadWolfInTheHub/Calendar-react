import React, { useEffect } from 'react';


import './modal.scss';
import ModalForm from './ModalForm';

const Modal = ({setStartDate, displayedWeek, createEvent, setCreateEvent}) => {

  const onCloseModal = () => {
    setCreateEvent(!createEvent);
  };
    
  useEffect(() => {
    const modalCloseBtn = () => {
      onCloseModal()
    }

    const closeModal = document.querySelector('.create-event__close-btn');
    const submitBtn = document.querySelector('.event-form__submit-btn');
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
          displayedWeek={displayedWeek} 
          onCloseModal={onCloseModal}  
        />
        </div>
      </div>
    </div>
  );

}

export default Modal;
