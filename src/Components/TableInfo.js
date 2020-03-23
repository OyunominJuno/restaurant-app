import React from 'react';
import '../index.css';
import axios from 'axios';
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstap.min.css"

class TableInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableNumber: 0, 
            seatNumber: 0,
            orderSubmitted: false,
            waitTime: 0,
            orderArray: []
            ,
            menuArray: ["Burger", "Fries", "Pizza"]
        }
        this.onPay = this.onPay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateOrderArray = this.updateOrderArray.bind(this);
        this.cancelOrderArray = this.cancelOrderArray.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();

        const order = {
            tableNumber: this.state.tableNumber,
            seatNumber: this.state.seatNumber,
            orderSubmitted: this.state.orderSubmitted,
            waitTime: this.state.waitTime,
            orderArray: this.state.orderArray,
        }
        axios.post('http://localhost:3200/orders/add', order)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        console.log(order);
        this.setState({
            orderSubmitted: true,
            waitTime: 15,
        });
        //window.location = '/';
    };
    
    onPay() {
        this.setState({
            orderSubmitted: false,
            waitTime: 0,
            orderArray: [],
        });
    };
    updateOrderArray(className, e) {
        this.setState({
            orderArray: [...this.state.orderArray, className]
        });
    }
    cancelOrderArray(index, e) {
        const newArray = this.state.orderArray.filter((elem, j) => index !== j);
        this.setState({
            orderArray: newArray
        });
    }
    //deleteOrder(e) {
    //    this.setState({
    //        orderArray: this.state.orderArray.filter(function (order) {
    //            return order !== e.target.value
    //            })
    //    });
        
    //}
    render() {
        const listItems = this.state.menuArray.map((elem, index) =>
            <div className="menu">
                <button key={index} className={elem} onClick={(e) => this.updateOrderArray(elem, e)}>{elem}</button>
                
            </div>
        );
        const listOrders = this.state.orderArray.map((elem, index) =>
            <div className="orders">
                <li>{elem}
                    <button key={index} onClick={(e) => this.cancelOrderArray(index, e)}>Remove</button>
                </li>
            </div>
                );
        const submitted = this.state.orderSubmitted;
        return (<div className="TableInfo">

            <ul>
                <li>Table Number :{this.state.tableNumber}</li>
                <li>Seat Number   :{this.state.seatNumber}</li>
                <li>Order Submitted  :{submitted ? 'Yes' : 'No'}</li>
                <li>Wait Time :{this.state.waitTime}</li>
            </ul>
            <ol>
                {listOrders}
            </ol>
            {listItems}
            <button onClick={this.onSubmit}><h3>Submit Order</h3></button>
            <button onClick={this.onPay}><h3>Pay Order</h3></button>
        </div>)
    }
}

export default TableInfo
