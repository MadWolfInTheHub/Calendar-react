import React, { Component } from "react";
import moment from "moment";
/* Use it to transfer date nad time under proper names to the server */
/* val = new Date(moment(date + ' ' + value)) */

class ModalForm extends Component {
  state = {
    id: Math.random(),
    title: '',
    description: '',
    date: moment(this.props.date).format("YYYY-MM-DD"),
    dateFrom: moment(this.props.displayedWeek).format('hh:mm'),
    dateTo: moment(this.props.displayedWeek).format('hh:mm'),
  }
  
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({    
      [name]: value,
    });
  }

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }
 

  render() {
    return (
      <form 
        className="event-form"
        onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="event-form__field"
          value={this.state.title}
          onChange={this.handleChange}

        />
        <div className="event-form__time">
          <input 
            type="date"
            name="date"
            className="event-form__field"
            value={moment(this.state.date).format("YYYY-MM-DD")}
            onChange={this.handleChange}
          />
          <input
            type="time"
            name="dateFrom"
            className="event-form__field"
            value={this.state.dateFrom} 
            onChange={this.handleChange}
          />
          <span>-</span>
          <input
            type="time"
            name="dateTo"
            className="event-form__field"
            value={this.state.dateTo}
            onChange={this.handleChange}
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          className="event-form__field"
          onChange={this.handleChange}
        ></textarea>
        <button
          type="submit"
          className="event-form__submit-btn"
        >
          Create
        </button>
      </form>
    );
  }
};

export default ModalForm;