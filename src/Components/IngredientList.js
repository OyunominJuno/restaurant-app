import React, {Component} from 'react';
import axios from 'axios';

export default class IngredientList extends Component {
    state = {
        ingredients: []
    }

componentDidMount(){
    axios.get('http://localhost:3200/ingredients')
        .then(res => {
            console.log(res);
            this.setState({ingredients: res.data});
        });
}

render(){
    return(
        <ul>
            {this.state.ingredients.map(ingredient => <li>{ingredient.name}  -- Quantity Needed: {ingredient.quantity}  --  For Dish: {ingredient.forDish}</li>)}
        </ul>
    )
}
}