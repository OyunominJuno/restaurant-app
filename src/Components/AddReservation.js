import React, { Component } from 'react';
import axios from 'axios';

export default class AddReservation extends Component {
    constructor() {
        super();
        this.state = {
            guestName: '',
            partyNumber: 0,
            resDate: '',
            time24hr: '',
            weekDay: '',
            tableNumber: 0,
            instructions: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
        //this.setState({name: event.target.name, description: event.target.description});
    }

    handleSubmit = event => {
        //event.preventDefault();
        const reser = {
            guestName: this.state.guestName,
            partyNumber: this.state.partyNumber,
            resDate: this.resDate,
            time24hr: this.state.time24hr,
            weekDay: this.state.weekDay,
            tableNumber: this.state.tableNumber,
            instructions: this.state.instructions
        }

        axios.post('http://localhost:3200/reservations/add', reser)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div><h4>ADD RESERVATION:</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Guest Name: 
                    <input type="text" name="guestName" defaultValue={this.state.guestName} value={this.state.guestName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Party of: 
                        <select name="partyNumber" onChange={this.handleChange} value={this.state.partyNumber}>
                            <option value="-">-</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="9">9</option>
                            <option value="11">11</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                    <label>
                        Reservation Date:
                    <input type="text" name="resDate" value={this.state.resDate} onChange={this.handleChange} />
                    </label>
                    <label>
                        time24hr:
                    <input type="text" name="time24hr" value={this.state.time24hr} onChange={this.handleChange} />
                    </label>
                    <label>
                        Table:
                        <select name="tableNumber" onChange={this.handleChange} value={this.state.tableNumber}>
                            <option value="-">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <label>
                        Instructions:
                    <input type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
