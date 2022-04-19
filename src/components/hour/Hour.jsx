import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const from = new Date(dateFrom);
        const to = new Date(dateTo);
        const eventStart = `${from.getHours()}:${formatMins(
          from.getMinutes()
        )}`;
        const eventEnd = `${to.getHours()}:${formatMins(
          to.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(to.getTime() - from.getTime()) / (1000 * 60)}
            marginTop={from.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Hour;
