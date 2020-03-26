import React, {Component} from 'react';
import Front from './Front';
import Chef from './Chef';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import NavWaitress from './NavWaitress';


class Nav extends Component{   
    render(){   
        return(<Router><div className="navbar">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/api/order/front" className="nav-link">Front</Link>
                    </li>
              <li className="navbar-item">
              <Link to="/api/order/waitress" className="nav-link">Waitress</Link>
              </li>
              <li className="navbar-item">
              <Link to="/api/order/chef" className="nav-link">Chef</Link>
              </li>
            </ul>
            </div>
          </nav>
        

                    <Route path="/api/order/front" component={Front}/>
                    <Route path="/api/order/waitress" component={NavWaitress}/>
                    <Route path="/api/order/chef" component={Chef}/>
        
        </div>
        </Router>
              )
    }
}                
export default Nav;
