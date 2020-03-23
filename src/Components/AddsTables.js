import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class AddsTables extends Component {
           state = {
           number: '', 
           tableStatus: 'Available',
          orderStatus:'To be placed'
          
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
render(){
    return(
    <div>
        <div>
        <li>Table 1 
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table:1'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 2
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table:2'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 3
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table:3'><button type="order"> Orders</button></a> 
        </li>
        </div> 
        <div>
        <li>Table 4
        Status:<input type="text" name="tableStatus" value={this.state.tableStatus} onChange={this.handleChange}/>   
        <button type="reserve"> Reserve</button>
        <label>
        Order status: <input type="text" name="orderStatus" value={this.state.orderStatus} onChange={this.handleChange}/>        
        </label>
        <a href='http://localhost:3000/api/order/table:1'><button type="order"> Orders</button></a> 
        <a href='http://localhost:3200/orderss'><button>alldishes</button></a>
        </li>
        
        </div> 
        </div>
    )
}
}
/*
render(){
    return(
        <div>
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
                     Ingredience:
                    <input type="text" name="ingredience" value={this.state.ingredience} onChange={this.handleChange} />
                </label>
                <label>         
                    Menu version          
                        <select name="version" onChange={this.handleChange} value={this.state.version}>                
                            <option value="3/11">3/11</option>  
                            <option value="3/12">3/12</option>             
                            <option value="3/13">3/13</option>                 
                            <option value="3/14">3/14</option>               
                        </select>   
                </label>

                <button type="submit"> Add</button>
            </form>
        </div>
    )
}   */
