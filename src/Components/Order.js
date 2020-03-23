import React, {Component} from 'react';

class Order extends Component {
    constructor() {
        super();
        this.state = {
            order: [],
        }
    }
  
    async componentDidMount(){
                     
        const url = "http://localhost:3200/orders";
        console.log(url);
        const response = await fetch(url);
        console.log('response - ',response);
        const data = await response.json();
        console.log('data - ',data);
        this.setState({ reservation: data }, () => console.log('Orders fetched...', data));
    }

    render(){
        return(
               <div>
               <h3>Orders</h3> 
               {this.state.order.map(order =><li key = {order.id}>
                   {order.orderer}, {order.dish}, {order.specialInstructions},{order.allergies}
                </li>
              )}
               </div>
            )
       
        }
}

export default Order;