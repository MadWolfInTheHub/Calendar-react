import React, { Component } from "react";
import moment from "moment";
import { createEvent } from "../../gateway/tasksGateway";
/* Use it to transfer date nad time under proper names to the server */
/* val = new Date(moment(date + ' ' + value)) */

class ModalForm extends Component {
  state = {
    title: '',
    description: '',
    date: moment(this.props.eventDay).format("YYYY-MM-DD"),
    dateFrom: moment(this.props.eventDay).format('hh:mm'),
    dateTo: moment(this.props.eventDay).format('hh:mm'),
  }
  
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({    
      [name]: value,
    });
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.state.title === '' || this.state.description === '') {
      alert("Plase fill in the form!")
      return;
    }
    createEvent({
      title: this.state.title,
      description: this.state.description,
      dateFrom: new Date(moment(this.state.date + ' ' + this.state.dateFrom)),
      dateTo: new Date(moment(this.state.date + ' ' + this.state.dateTo)),
    })
    this.props.onCloseModal()
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