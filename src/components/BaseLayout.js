import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    let navTitle = {
      fontFamily: "Arizonia",
      fontSize: "180%"
    };
    return (
      <div className="container-fluid nav">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li style={navTitle}>
              <NavLink
                activeClassName="selected"
                className="nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navTitle}
                activeClassName="selected"
                className="nav-link"
                exact
                to="/createpost"
              >
                Create Post
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navTitle}
                activeClassName="selected"
                className="nav-link"
                exact
                to="/showpost/:id"
              >
                Show Post
              </NavLink>
            </li>
          </ul>
        </div>
        {this.props.children}
        <footer className="col-lg-12" />
      </div>
    );
  }
}
