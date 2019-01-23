//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  static propTypes ={
    title:PropTypes.string.isRequired,
    items:PropTypes.array.isRequired
  };
  render() {
    const {title,items} = this.props;
    
    return (
      <div className="Header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
            <p>{title}</p>
            <ul className="menu">
              {
                items && items.map(
                  (item,key)=> <li key={key}><Link to={item.url}>{item.title}</Link></li>)
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
