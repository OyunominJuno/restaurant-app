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

class Front extends Component {   
    render(){      
        return( <div> 
                    <h1>Front Console</h1> 
                    <br/>
                    <Table/>
                    <AddsTables/>
                    <br/>
                    <Reservation/>
                    <AddReservation/>

               
                </div>      
              )   //before in div was<DishList/> <Dish/><AddDish/>
             // <UpdateMenuItem/>
    }
}
export default Front;
