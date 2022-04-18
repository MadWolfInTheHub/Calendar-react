import React, { useEffect } from 'react';
import Day from '../day/Day';
import moment from 'moment';

import './week.scss';

const Week = ({ weekDates, events, setEventDay, setCreateEvent }) => {
  
  useEffect(() => {
    const weekElem = document.querySelector('.calendar__week')

    const handleClick = event => {
      const choosenTime = event.target.closest('.calendar__time-slot').getAttribute('data-time')
      const choosenDay = event.target.closest('.calendar__day').getAttribute('data-day')
      console.log(choosenTime)
      const chossenDate = weekDates.filter(date => moment(date).format('DD') === choosenDay)
      setEventDay(moment(chossenDate[0]).add(choosenTime - 1, 'hours'))
      setCreateEvent(true)
    }
    weekElem.addEventListener("click", handleClick)
    return () => {
      
      weekElem.removeEventListener("click", handleClick)
    }
  })
  
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

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
