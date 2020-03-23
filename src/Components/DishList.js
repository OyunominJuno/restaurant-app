import React, {Component} from 'react';
import axios from 'axios';

export default class DishList extends Component {
    state = {
        dishes: []
    }

componentDidMount(){
    axios.get('http://localhost:3200/dishes')
        .then(res => {
            console.log(res);
            this.setState({dishes: res.data});
        });
}

render(){
    return(
        <ul>
            {this.state.dishes.map(dish => <li>{dish.name}  --  {dish.description}  --  {dish.quantity} Available  --  For {dish.service} service</li>)}
        </ul>
    )
}
}