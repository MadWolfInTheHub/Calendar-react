import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import PopUp from './components/popup/PopUp.jsx';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import { fetchEventsList } from './gateway/tasksGateway.jsx';

import './common.scss';

const App = () => {
  const [events, setEvents] = useState({ eventsList: [] });
  const [weekStartDate, setStartDate] = useState({ currentday: new Date() });
  const [popUpStyles, setPopUpStyles] = useState({ top: '', left: '' });
  const [createEvent, setCreateEvent] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [eventToDelete, seteventToDelete] = useState(null);

  const { currentday } = weekStartDate;
  const [eventDay, setEventDay] = useState(currentday);

  const weekDates = generateWeekRange(getWeekStartDate(currentday));

  const fetchEvents = () => {
    fetchEventsList().then((eventsList) => setEvents({
      eventsList,
    }));
  };

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
        setPopUp={setPopUp}
        setPopUpStyles={setPopUpStyles}
        seteventToDelete={seteventToDelete}
        events={events.eventsList}
        fetchEvents={fetchEvents}
        />
      {
        !createEvent
          ? null
          : <Modal
            eventDay={eventDay}
            setEventDay={setEventDay}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
            fetchEvents={fetchEvents}
          />
        }
        {
          !popUp
            ? null
            : <PopUp
            popUpStyles={popUpStyles}
            setPopUp={setPopUp}
            eventToDelete={eventToDelete}
            fetchEvents={fetchEvents}
          />
        }
    </>
  );
};

export default App;
