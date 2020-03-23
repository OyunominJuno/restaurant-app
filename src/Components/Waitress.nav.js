import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import TableInfo from './TableInfo';

class NavTables extends Component{  
    constructor() {
        super();
        this.state = {
            tables: [TableInfo, TableInfo, TableInfo, TableInfo]
        }
    } 
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
        

                    <Route path="/api/table1" component={this.state.tables[0]}/>
                    <Route path="/api/table2" component={this.state.tables[1]}/>
                    <Route path="/api/table3" component={this.state.tables[2]}/>
                    <Route path="/api/table4" component={this.state.tables[3]}/>
        
        </div>
        </Router>
              )
    }
}                
export default NavTables;