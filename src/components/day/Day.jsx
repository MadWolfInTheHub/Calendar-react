/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import Hour from '../hour/Hour';
import Clock from '../clock/Clock';

import './day.scss';

const Day = ({ dataDay, dayEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {dataDay === new Date().getDate()
        ? <Clock />
        : null
      }
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour,
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dataDay: propTypes.number,
  dayEvents: propTypes.array,
};
