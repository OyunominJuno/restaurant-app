import React, {Component} from 'react';

class Dish extends Component {
    constructor() {
        super();
        this.state = {
            dish: [],
        }
        }

  
    async componentDidMount(){
                     
            //    data => this.setState({dish: data}, () => console.log('Dishes fetched...',data)));
       const url = "http://localhost:3200/dishes";
        console.log(url);
        const response = await fetch(url);
        console.log('response - ',response);
        const data = await response.json();
        console.log('data - ',data);
        this.setState({ dish: data }, () => console.log('Dishes fetched...', data));
    }

    render(){
              return (<div>
                  {this.state.dish.map(dish => <li key = {dish.id}> {dish.name} {dish.description}  </li>
                     )}
                  </div>
            )
       
        }
}

export default Dish;
