import React, {Component} from 'react';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            table: [],
        }
        }
    
async componentDidMount(){
                     
            //    data => this.setState({dish: data}, () => console.log('Dishes fetched...',data)));
       const url = "http://localhost:3200/";
        console.log(url);
        const response = await fetch(url);
        console.log('response - ',response);
        const data = await response.json();
        console.log('data - ',data);
        this.setState({ table: data }, () => console.log('Tables fetched...', data));
    }

    render(){
              return ( <h2>TABLES</h2>
                     )
            
        }
}

export default Table;    
