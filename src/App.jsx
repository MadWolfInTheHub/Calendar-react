import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import Modal from './components/modal/Modal.jsx';

const App = () => {
  const [weekStartDate, setStartDate] = useState({
    displayedWeek: new Date()
  })
  const [createEvent, setCreateEvent] = useState(false)
  
  const { displayedWeek } = weekStartDate;
 
  const weekDates = generateWeekRange(getWeekStartDate(displayedWeek));
  return (
    <>
      <Header 
        displayedWeek={displayedWeek}
        setStartDate={setStartDate}
        createEvent={createEvent}
        setCreateEvent={setCreateEvent}
        />
      <Calendar weekDates={weekDates} />
      {
        !createEvent
        ? null
        : <Modal 
            displayedWeek={displayedWeek}
            setStartDate={setStartDate}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
          />
        }
    </>
  );

}

export default App;
