import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';

class NavWaitress extends Component{  
    render(){   
        return(<Router><div className="navbar-tables">
            <nav className="navbar">
            <div className="a">
                <ul className="aa">
                    <li className="navbar-item">
                    <Link to="/api/table1" className="nav-link">Table1</Link>
                    </li>
              <li className="navbar-item">
              <Link to="/api/table2" className="nav-link">Table2</Link>
              </li>
              <li className="navbar-item">
              <Link to="/api/table3" className="nav-link">Table3</Link>
              </li>
              <li className="navbar-item">
              <Link to="/api/table4" className="nav-link">Table4</Link>
              </li>
              
            </ul>
            </div>
          </nav>
        

                    <Route path="/api/table1" component={Table1}/>
                    <Route path="/api/table2" component={Table2}/>
                    <Route path="/api/table3" component={Table3}/>
                    <Route path="/api/table4" component={Table4}/>
        
        </div>
        </Router>
              )
    }
}                
export default NavWaitress;