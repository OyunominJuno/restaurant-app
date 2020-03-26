import React, {Component} from 'react';
import Reservation from './Reservation';
import AddReservation from './AddReservation';
import Table from './Table';
import AddsTables from './AddsTables';

class Front extends Component {   
    render(){      
        return( <div> 
                    <br   />
                    <h1>Front Console</h1> 
                    <br/>
                    <Table/>
                    <AddsTables/>
                    <br/>
                    <Reservation/>
                    <AddReservation/>

               
                </div>      
              )  
    }
}
export default Front;
