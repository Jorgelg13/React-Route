//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';

//componentes
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';

//data
import items from './data/menu';

class App extends Component {

  static propTypes ={
    children : PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div className="App">
       <Header title="codejobs" items={items}></Header>
       <Content body={children}></Content>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
