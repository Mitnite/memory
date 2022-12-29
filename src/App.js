import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import Picture from "./components/PictureBox/Picture/Picture";
import PictureBox from "./components/PictureBox/PictureBox";

class App extends Component {


  render() {

    return (
        <div className={'App'}>
          <PictureBox block={this.props.sendoff}/>
          <PictureBox block={this.props.waiting}/>
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    sendoff: state.sendoff,
    waiting: state.waiting,
  }
}

export default connect(mapStateToProps)(App);
