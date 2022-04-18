import React, { useEffect } from 'react';
import { getDisplayedMonth } from '../../utils/dateUtils';
import CreateButton from './CreateButton'

import './header.scss';

const Header = ({ setStartDate, currentday, createEvent, setCreateEvent }) => {
  const displayedMonthElem = getDisplayedMonth(currentday)

  const onChangeWeek = event => { 
    const changeWeek = event.target.getAttribute('data-direction');
  
    const currentWeek = new Date();
    const week = 7;
    const date = new Date(currentday).getDate();
    const month = new Date(currentday).getMonth();
    const year = new Date(currentday).getFullYear();

    if (changeWeek === null) return;

    if (changeWeek === 'today') {
      setStartDate({
        currentday: currentWeek,
      });
    } ;

    if (changeWeek === 'prev') {
      setStartDate({
        currentday: (new Date(year, month, date - week)),
      });
    };

    if (changeWeek === 'next') {
      setStartDate({
        currentday: (new Date(year, month, date + week)),
      });
    };
  };

  useEffect(() => {
    const navElem = document.querySelector('header');

    navElem.addEventListener('click', onChangeWeek);
    
    return () => {
      navElem.removeEventListener('click', onChangeWeek)
      
    };
  });

  return (
    <header className="header">
      <CreateButton 
        createEvent={createEvent}
        setCreateEvent={setCreateEvent}
      />
      <div className="navigation">
        <button data-direction="today" className="navigation__today-btn button">Today</button>
        <button data-direction="prev" className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button data-direction="next" className="icon-button navigation__nav-icon next__week-btn">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonthElem}</span>
      </div>
    </header>
  );
};

export default Header;
