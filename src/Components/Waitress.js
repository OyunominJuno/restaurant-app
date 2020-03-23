import React, {Component} from 'react';
import NavTables from "./Waitress.nav";

class Waitress extends Component {
    constructor() {
        super();
        this.state = {
            reservation: [],
        }
    }

  
    async componentDidMount(){      
        const url = "http://localhost:3200/reservations";
        console.log(url);
        const response = await fetch(url);
        console.log('response - ',response);
        const data = await response.json();
        console.log('data - ',data);
        this.setState({ reservation: data }, () => console.log('Reservations fetched...', data));
    }
    // Try to add another one of these for dishes and add dishes array to constructor above, to address dishes in order dropdown

    render(){
        return(
               <div>
               <h1>Waitress Console</h1>   
                    <table>
                        <tr>
                        {this.state.reservation.map(reservation =><th key = {reservation.id}>
                            Table for {reservation.guestName}
                            </th>)}
                        </tr>
                        <tr>
                        {this.state.reservation.map(reservation =><td key = {reservation.id}>
                            Party of {reservation.partyNumber}
                            </td>)}
                        </tr>
                        <tr>
                        {this.state.reservation.map(reservation =><td key = {reservation.id}>
                            Arriving at {reservation.time24hr}
                            <br/>
                            <form onSubmit={this.handleSubmit}>
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
                            </form>
                            <button type="submit">Place Order</button>
                            </td>)}
                        </tr>
                    </table>
                    <NavTables/>
               </div>
            )
       
        }
}
export default Waitress;



//     {this.state.reservation.map(reservation =><li key = {reservation.id}>
//     {reservation.guestName}, {reservation.partyNumber}, {reservation.resDate}, 
//     {reservation.time24hr}, {reservation.tableNumber}, {reservation.date}, 
//     {reservation.instructions}