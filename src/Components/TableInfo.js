import React, { Component } from 'react';
import axios from 'axios';

class TableInfo extends Component {
    constructor() {
        super();
        this.state = {
            tableNumber: 1,
            seatNumber: 3,
            orderSubmitted: false,
            waitTime: 0,
            orderArray: [],
            menuArray: [],
        }
        this.onPay = this.onPay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateOrderArray = this.updateOrderArray.bind(this);
        this.cancelOrderArray = this.cancelOrderArray.bind(this);
    }

    async componentDidMount() {
        axios.get('http://localhost:3200/dishes')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        menuArray: response.data.map(dish => dish.name)
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // Try to add another one of these for dishes and add dishes array to constructor above, to address dishes in order dropdown
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
        //const submitted = this.state.orderSubmitted;
        return (

            <div>
                
                            <button type="submit" onClick={this.onSubmit}><strong>Place Order</strong></button>
                            <button onClick={this.onPay}><strong>Pay Order</strong></button>
                            <h4>Order:</h4>
                            {this.state.orderArray.map(elem => {
                                return (<p>{elem + " "}</p>)
                            })}
                            <h4>Menu:</h4>
                            {listItems}
                            <ol>
                                {listOrders}
                            </ol>
                            <h2>{this.state.orderSubmitted ? 'Order Submitted!' : ''}</h2>
       
            </div>
        )

    }
}
export default TableInfo;