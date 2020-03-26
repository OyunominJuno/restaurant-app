import React, { Component } from 'react';
import axios from 'axios';

export default class AddIngredient extends Component {
       state = {
       name: '', 
       quantity: '',
       forDish: ''
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
    const ingredient = {
        name: this.state.name, 
        quantity: this.state.quantity,
        forDish: this.state.forDish
    }
    //event.preventDefault();
   axios.post('http://localhost:3200/ingredients/add', ingredient)
      .then(res => {
          console.log(res.data);
      }).catch(err => console.log(err))
}

render(){
    return(
        <div>
            <h3>Add to Shopping List</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                     Ingredient Name:
                    <input type="text" name="name" defaultValue={this.state.name} value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                     Quantity:
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                </label>
                <label>         
                     For Dish:         
                        <select name="forDish" onChange={this.handleChange} value={this.state.forDish}>                
                            <option value="default">Select Dish</option>  
                            <option value="Poached Lobster">Poached Lobster</option>         
                            <option value="Wild Scottish Sea Trout">Wild Scottish Sea Trout</option>
                            <option value="White Quail">White Quail</option>  
                            <option value="Poached Apple Salad">Poached Apple Salad</option>  
                            <option value="Bread and Butter">Bread and Butter</option>  
                            <option value="Royal Ossetra Caviar">Royal Ossetra Caviar</option>                  
                        </select>   
                </label>
                <button type="submit"> Add</button>
            </form>
        </div>
    )
}
}
