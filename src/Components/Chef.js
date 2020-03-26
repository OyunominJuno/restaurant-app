import React, {Component} from 'react';
import AddDish from './AddDish';
import DishList from './DishList';
import OrderList from './OrderList';
import AddIngredient from './AddIngredient';
import IngredientList from './IngredientList';

class Chef extends Component {   
    render(){      
        return( <div> 
                    <br />
                    <h1>Chef Console</h1> 
                    {/* <Order/> */}
                    <OrderList/>
                    <br/>
                    <h3>Order Up</h3>
                    <br/>
                    <AddDish/>
                    <br/>
                    <DishList/>
                    <br/>
                    <AddIngredient/>
                    <br/>
                    <IngredientList/>
                </div>      
              )
    }
}
export default Chef;
