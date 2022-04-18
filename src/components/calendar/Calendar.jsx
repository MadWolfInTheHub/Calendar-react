import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';


import './calendar.scss';
import { fetchEventsList } from '../../gateway/tasksGateway';

class Calendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    fetchEventsList().then(eventsList => 
      this.setState({
        events: eventsList,
      }),
    );
  }
  
  render() {
    const { weekDates } = this.props;
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            
            <Week weekDates={weekDates} events={this.state.events} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
