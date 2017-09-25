import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {
  render(){

    // let navTitle = {
    //       "fontFamily": "Arizonia",
    //       "fontSize": "180%"}
      return (
//         <div className="container-fluid nav">
//           <div className="navbar-header">
//               <ul className="nav navbar-nav">
//                 <li style={navTitle}>
//                 <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
//                 </li>
//                 <li>
//                 <NavLink style={navTitle} activeClassName="selected" className="nav-link" exact to="/portfolio">Portfolio</NavLink>
//                 </li>
//                 <li>
//                 <NavLink style={navTitle} activeClassName="selected" className="nav-link" exact to="/about">About</NavLink>
//                 </li>
//                 <li>
//                 <NavLink style={navTitle} activeClassName="selected" className="nav-link" exact to="/contact">Contact</NavLink>
//                 </li>
//                 <li>
//                 <NavLink style={navTitle} activeClassName="selected" className="nav-link" exact to="/references">References</NavLink>
//                 </li>
//                 <li>
//                   <NavLink  activeClassName="selected" to="./">
//                     <i className="fa fa-facebook" aria-hidden="true"></i>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//
// {this.props.children}
// </div>
          )
        }
      }
