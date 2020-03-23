import React, { Component } from 'react';
import axios from 'axios';

export default class AddReservation extends Component {
       state = {
           reservations: []
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
  axios.post('http://localhost:3200/api/reservation', this.state)
      .then(res => {
          console.log(res);
          console.log(res.data);
      })
}

render(){
    return(   
        <div><h4>ADD RESERVATION:</h4>
            <form onSubmit={this.handleSubmit}>
                <label>
                     Guest Name:
                    <input type="text" name="guestName" defaultValue={this.state.guestName} value={this.state.guestName} onChange={this.handleChange} />
                </label>
                <label>         
                    Party number          
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
                    ResDate: 
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
