import React, { Component } from 'react';
import axios from 'axios';
import TableInfo from './TableInfo';

class Table4 extends Component {
    constructor() {
        super();
        this.state = {
            reservation: [],
        }
    }


    async componentDidMount() {
        let url = "http://localhost:3200/reservations";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ reservation: data});
        const tempArray = this.state.reservation.filter(function (reser) 
        {return reser.tableNumber === 4});
        this.setState({ reservation: tempArray});
    }

    // Try to add another one of these for dishes and add dishes array to constructor above, to address dishes in order dropdown
   

     

    render() {
        //const submitted = this.state.orderSubmitted;
        return (

            <div>
                <br   />
                <h1>Waitress Console for Table 4</h1>
                <h2>{this.state.reservation.length === 0 ? 'There is no reservation' : 'Reservation:'}</h2>
                <table>
                    <tr>
                        {this.state.reservation.map(reservation => <th key={reservation.id}>
                            Table for {reservation.guestName}
                        </th>)}
                    </tr>
                    <tr>
                        {this.state.reservation.map(reservation => <td key={reservation.id}>
                            Party of {reservation.partyNumber}
                        </td>)}
                    </tr>
                    <tr>
                        {this.state.reservation.map(reservation => <td key={reservation.id}>
                            Arriving at {reservation.time24hr}
                            <br />
                            <TableInfo/>
                        </td>)}
                    </tr>
                </table>
                
            </div>
        )

    }
}
export default Table4;



//     {this.state.reservation.map(reservation =><li key = {reservation.id}>
//     {reservation.guestName}, {reservation.partyNumber}, {reservation.resDate}, 
//     {reservation.time24hr}, {reservation.tableNumber}, {reservation.date}, 
//     {reservation.instructions}