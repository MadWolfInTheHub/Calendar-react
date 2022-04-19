import React, { useEffect } from 'react';
import Day from '../day/Day';
import moment from 'moment';

import './week.scss';
import propTypes from 'prop-types';

const Week = ({ weekDates, events, setEventDay, setCreateEvent, setPopUp, setPopUpStyles, seteventToDelete }) => {

  
  useEffect(() => {
    const weekElem = document.querySelector('.calendar__week');

    const handleChoosedTimeSlot = event => {
      const isEvent = event.target.closest('.event');
      
      if(isEvent) {
        const eventCoordinates = isEvent.getBoundingClientRect();
        const eventId = isEvent.getAttribute('data-event-id');
        seteventToDelete(eventId);
        setPopUpStyles({
          top: `${eventCoordinates.y + eventCoordinates.height}px`,
          left: `${eventCoordinates.x}px`
        });
        setPopUp(true);

        return;
      };


      const hour = 1
      const choosenTime = event.target.closest('.calendar__time-slot').getAttribute('data-time');
      const choosenDay = event.target.closest('.calendar__day').getAttribute('data-day');
      const chossenDate = weekDates.filter(date => moment(date).format('DD') === choosenDay);


      setEventDay(moment(chossenDate[0]).add(choosenTime - hour, 'hours'));
      setCreateEvent(true);
    };


    weekElem.addEventListener("click", handleChoosedTimeSlot);
    return () => {
      weekElem.removeEventListener("click", handleChoosedTimeSlot);
    };
  });
  
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter((event) => {
          return new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < dayEnd
        });
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;

Week.propTypes = {
  weekDates: propTypes.array,
  setEventDay: propTypes.func,
  setCreateEvent: propTypes.func,
  setPopU: propTypes.func,
  setPopUpStyles: propTypes.func,
  seteventToDelete: propTypes.func,
  events: propTypes.array,
  fetchEvents: propTypes.func,
}