import React, { Component } from 'react';
import axios from 'axios';
import TableInfo from './TableInfo';

class Table1 extends Component {
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
        {return reser.tableNumber === 1});
        this.setState({ reservation: tempArray});
    }

    // Try to add another one of these for dishes and add dishes array to constructor above, to address dishes in order dropdown
   

     

    render() {
        //const submitted = this.state.orderSubmitted;
        return (

            <div>
                <h1>Waitress Console for Table 1</h1>
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
                            {/* <form onSubmit={this.handleSubmit}>
                                <label>
                                    <select name="partyNumber" onChange={this.handleChange} value={this.state.partyNumber}>
                                        <option value="Poached Lobster">Poached Lobster</option>
                                        <option value="Wild Scottish Sea Trout">Wild Scottish Sea Trout</option>
                                        <option value="White Quail">White Quail</option>
                                        <option value="Poached Apple Salad">Poached Apple Salad</option>
                                        <option value="Bread and Butter">Bread and Butter</option>
                                        <option value="Royal Ossetra Caviar">Royal Ossetra Caviar</option>
                                    </select>
                                </label>
                            </form> */}
                <TableInfo/>
                        </td>)}
                    </tr>
                </table>
            </div>
        )

    }
}
export default Table1;



//     {this.state.reservation.map(reservation =><li key = {reservation.id}>
//     {reservation.guestName}, {reservation.partyNumber}, {reservation.resDate}, 
//     {reservation.time24hr}, {reservation.tableNumber}, {reservation.date}, 
//     {reservation.instructions}