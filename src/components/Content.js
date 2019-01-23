import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

class Content extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    };
    constructor(){
        super();

        this.state={
            count:0
        };
        this.handleCountClick = this.handleCountClick.bind(this);
    }

    componentDidMount(){
        this.setState ({
            count:1
        });
    }

    handleCountClick(e){
        if(e.target.id === "add"){
          this.setState({
             count: this.state.count + 1
          });
        }

        else if(e.target.id ==="restar" && this.state.count >0){
            this.setState({
                count: this.state.count -1
            });
        }

        else if(e.target.id==="resetear"){
            this.setState({
                count: 0
            });
        }
    }

  render() {
      const {body} = this.props;
    return (
      <div className="Content">
         <h1>ESTO ES CONTENIDO DE LA PAGINA</h1>
         <h1>Contador: {this.state.count}</h1>
         <p><button id = "add" onClick={this.handleCountClick}>+</button>
         <button id = "restar" onClick={this.handleCountClick}>-</button>
         <button id = "resetear" onClick={this.handleCountClick}>Reset</button></p>
         {body}
      </div>
    );
  }
}

export default Content;
