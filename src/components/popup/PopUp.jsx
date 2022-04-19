import React, { useEffect } from 'react';
import { deleteEvent } from '../../gateway/tasksGateway';
import propTypes from 'prop-types';

const PopUp = ({ popUpStyles, setPopUp, eventToDelete, fetchEvents }) => {
  const {top, left} = popUpStyles;

  useEffect(() => {
    const popUpElem = document.querySelector('.popup');
    const onClosePopUp = () => {
      setPopUp(false);
    };

    const deleteBtn = document.querySelector('.delete-event-btn');
    const onDeleteEvent = () => {
      deleteEvent(eventToDelete)
      .then(() => fetchEvents());
    };

    popUpElem.addEventListener('click', onClosePopUp);
    deleteBtn.addEventListener('click', onDeleteEvent);
    
    return () => {
      popUpElem.removeEventListener('click', onClosePopUp);
      deleteBtn.removeEventListener('click', onDeleteEvent);
    };
  });
  

  return (
    <div className="popup overlay">
      <div className="popup__overlay"></div>
      <div className="popup__content"style={{top: `${top}`, left: `${left}`}}>
        <button className="delete-event-btn" id={eventToDelete}>
          <i className="far fa-trash-alt"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes ={
  popUpStyles: propTypes.object,
  setPopUp: propTypes.func,
  eventToDelete: propTypes.string,
  fetchEvents: propTypes.func,
}