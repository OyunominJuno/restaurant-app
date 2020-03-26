import React, {Component} from 'react';
import axios from 'axios';

export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            ordersMade: []
        }
       this.onMake = this.onMake.bind(this);
    }

    // state = {
    //     orders: [],
    //     ordersMade: []
    // }
    

componentDidMount(){
    axios.get('http://localhost:3200/orders')
        .then(res => {
            console.log(res);
            this.setState({orders: res.data});
        });
};

onMake(index, e) {
    this.setState({
        ordersMade: [...this.state.ordersMade, index]

    });
    console.log(index);
};



render(){
    
    return(
        <ul>
            {this.state.orders.map(order => <li>Order for table: {order.tableNumber} Seat: {order.seatNumber} -- {order.orderArray} -- Est. Cooktime: {order.waitTime} min  <button>Make Order</button>   <button>Cancel Order</button></li>)}
            {/* {this.state.orders.map((order, index) => <li>Order for table: {order.tableNumber} Seat: {order.seatNumber} -- {order.orderArray} -- Est. Cooktime: {order.waitTime} min  <button onClick={this.onMake(index, e)}>Make Order</button>   <button>Cancel Order</button></li>)} */}
        </ul>
    )
}
}