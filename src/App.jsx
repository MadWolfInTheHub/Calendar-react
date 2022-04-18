import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';


import './common.scss';
import Modal from './components/modal/Modal.jsx';

const App = () => {
  const [weekStartDate, setStartDate] = useState({
    currentday: new Date()
  })
  const [createEvent, setCreateEvent] = useState(false)
  const { currentday } = weekStartDate;

  const [eventDay, setEventDay] = useState(currentday)
  console.log(eventDay)
 
  const weekDates = generateWeekRange(getWeekStartDate(currentday));
  return (
    <>
      <Header 
        currentday={currentday}
        setStartDate={setStartDate}
        createEvent={createEvent}
        setCreateEvent={setCreateEvent}
        />
      <Calendar 
        weekDates={weekDates}
        setEventDay={setEventDay}
        setCreateEvent={setCreateEvent}
        />
      {
        !createEvent
        ? null
        : <Modal 
            eventDay={eventDay}
            setEventDay={setEventDay}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
          />
        }
    </>
  );

}

export default App;
