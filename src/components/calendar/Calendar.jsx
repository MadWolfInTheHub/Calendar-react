/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

class Calendar extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { weekDates } = this.props;
    return (
      // eslint-disable-next-line
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.props.events}
              setEventDay={this.props.setEventDay}
              setCreateEvent={this.props.setCreateEvent}
              setPopUp={this.props.setPopUp}
              setPopUpStyles={this.props.setPopUpStyles}
              seteventToDelete={this.props.seteventToDelete}
              fetchEvents={this.fetchEvents}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;

Calendar.propTypes = {
  weekDates: propTypes.array,
  setEventDay: propTypes.func,
  setCreateEvent: propTypes.func,
  setPopU: propTypes.func,
  setPopUpStyles: propTypes.func,
  seteventToDelete: propTypes.func,
  events: propTypes.array,
  fetchEvents: propTypes.func,
};
