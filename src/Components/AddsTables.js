import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";


export default class AddsTables extends Component {
    constructor() {
        super();
    
           this.state = {
           number: '', 
           tableStatus: 'Available',
          orderStatus:'To be placed'
          
        }
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
       axios.post('http://localhost:3200/dishes', this.state)
          .then(res => {
              console.log(res);
              console.log(res.data);
          });
    }
    handleReserve = event => {       
        axios.post('http://localhost:3200/reservations', this.state)
            .then(res=> {
                console.log(res);
            console.log(res.data);
            });
    }
    handleOrder = event => {
        axios.post('http://localhost:3200/orders',this.state)
            .then(res=> {
                console.log(res);
            console.log(res.data);
            });
    }
    reserve(e) {
        this.setState({tableStatus: 'Reserved'});
    }
render(){
    return(<Router>
    <div>
        <div>
        <li>Table 1 
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button onclick={this.reserve} type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table1'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 2
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button onclick={this.reserve} type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table2'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 3
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button onclick={this.reserve} type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table3'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 4
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button onclick={this.reserve} type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table1'><button type="order"> Orders</button></a> 
        <a href='http://localhost:3200/orders'><button>alldishes</button></a>
        </li>
        
        </div> 
        </div>
        </Router>
    )
}
}
