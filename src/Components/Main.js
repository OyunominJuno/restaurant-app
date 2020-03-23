import React, {Component} from 'react';
import Title from './Title';
import Nav from './Nav';

class Main extends Component {   
    render(){      
        return(
              <div>
                <Title/>
                <Nav/>    
              </div>      
              )   //before in div was<DishList/> <Dish/><AddDish/>
             // <UpdateMenuItem/>
    }
}
export default Main;
