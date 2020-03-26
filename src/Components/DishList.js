import React, {Component} from 'react';
import axios from 'axios';

export default class DishList extends Component {
    constructor() {
        super();
    this.state = {
        dishes: [],
        orders: []
    }
}

async componentDidMount(){
    axios.get('http://localhost:3200/dishes')
        .then(res => {
            console.log(res);
            this.setState({dishes: res.data});
        });
        let url = "http://localhost:3200/orders";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ orders: data});
}
        
render(){
    
    return(
        
        <div>
        <ul>
            {this.state.dishes.map(dish => <li>{dish.name}  --  {dish.description}  --  {dish.quantity} Available  --  For {dish.service} service</li>)}
        </ul>
        </div>

    )
}
}