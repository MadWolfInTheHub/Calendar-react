import React, { useEffect } from 'react';
import propTypes from 'prop-types';

const CreateButton = ({ setCreateEvent, createEvent }) => {
  useEffect(() => {
    const onToggle = () => {
      setCreateEvent(!createEvent);
    };
    const btn = document.querySelector('.create-event-btn');

    btn.addEventListener('click', onToggle);

    return () => {
      btn.removeEventListener('click', onToggle);
    };
  });

  return (
    <>
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
      </button>
    </>
  );
};

export default CreateButton;

CreateButton.propTypes = {
  setStartDate: propTypes.func,
  createEvent: propTypes.bool,
};
