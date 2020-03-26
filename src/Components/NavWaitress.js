import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';

class NavWaitress extends Component{  
    render(){   
        return(<Router><br /><div className="navbar-tables">
            <nav className="navbar">
            <div className="a">
                <ul className="aa" id="mainMenu">
                    <li className="navbar-item">
                    <Link to="/api/order/table1" className="nav-link">Table 1</Link>
                    </li>
              <li className="navbar-item">
              <Link to="/api/order/table2" className="nav-link">Table 2</Link>
              </li>
              <li className="navbar-item">
              <Link to="/api/order/table3" className="nav-link">Table 3</Link>
              </li>
              <li className="navbar-item">
              <Link to="/api/order/table4" className="nav-link">Table 4</Link>
              </li>
              
            </ul>
            </div>
          </nav>
        

                    <Route path="/api/order/table1" component={Table1}/>
                    <Route path="/api/order/table2" component={Table2}/>
                    <Route path="/api/order/table3" component={Table3}/>
                    <Route path="/api/order/table4" component={Table4}/>
                    <br   />
        </div>
        </Router>
              )
    }
}                
export default NavWaitress;