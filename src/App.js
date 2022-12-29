import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import Picture from "./picture/Picture";

class App extends Component {


  render() {
    let pics = this.props.waiting.map((waiting, index) => {
      return (
          <Picture
              key={index}
              url={waiting.url}
          />
      )
    })
    return (
        <div className={'App'}>
          {pics}
          <img src="./img/waiting/waiting_1.jpg" alt=""/>
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    waiting: state.waiting,
  }
}

export default connect(mapStateToProps)(App);
