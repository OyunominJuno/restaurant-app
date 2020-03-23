import React, {Component} from 'react';
import Title from './Title';
import Reservation from './Reservation';
import AddReservation from './AddReservation';
import Table from './Table';
import AddsTables from './AddsTables';
import Dish from './Dish';
import AddDish from './AddDish';
import UpdateMenuItem from './UpdateMenuItem' 
import DishList from './DishList';
import Nav from './Nav';
import Order from './Order';

class Chef extends Component {   
    render(){      
        return( <div> 
                    <h1>Chef Console</h1> 
                    <Order/>
                    <br/>
                    <h3>Make Order</h3>
                    <br/>
                    <AddDish/>
                    <br/>
                    <DishList/>
                    
                </div>      
              )
    }
}
export default Chef;
