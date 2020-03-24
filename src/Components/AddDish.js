import React, { Component } from 'react';
import axios from 'axios';

export default class AddDish extends Component {
       state = {
       name: '', 
       description: '',
       quantity: '',
       service: ''
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
    const dish = {
        name: this.state.name, 
       description: this.state.description,
       quantity: this.state.quantity,
       service: this.state.service
    }
    //event.preventDefault();
   axios.post('http://localhost:3200/dishes/add', dish)
      .then(res => {
          console.log(res.data);
      }).catch(err => console.log(err))
}

render(){
    return(
        <div>
            <h3>Add a Dish</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                     Dish Name:
                    <input type="text" name="name" defaultValue={this.state.name} value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                     Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                     Quantity:
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                </label>
                <label>         
                    Service         
                        <select name="service" onChange={this.handleChange} value={this.state.service}>                
                            <option value="dinner">Dinner</option>  
                            <option value="lunch">Lunch</option>                        
                        </select>   
                </label>

                <button type="submit"> Add</button>
            </form>
        </div>
    )
}
}
