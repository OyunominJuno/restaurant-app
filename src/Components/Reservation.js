import React, {Component} from 'react';

class Reservation extends Component {
    constructor() {
        super();
        this.state = {
            reservation: [],
        }
    }

  
    async componentDidMount(){
                     
            //    data => this.setState({dish: data}, () => console.log('Dishes fetched...',data)));
        const url = "http://localhost:3200/reservations";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ reservation: data }, () => console.log('Reservations fetched...', data));
    }

    render(){
        return(
               <div>
               <h3>RESERVATIONS:</h3> 
               {this.state.reservation.map(reservation =><li key = {reservation.id}>
                   {reservation.guestName}, party of {reservation.partyNumber}, at table number {reservation.tableNumber}.
                   Reserved at {reservation.time24hr}, on {reservation.resDate}. Special accomodations: {reservation.instructions}
                      </li>
              )}
               </div>
            )
       
        }
}

export default Reservation;
