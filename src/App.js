import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import PictureBox from "./components/PictureBox/PictureBox";
import Layout from "./hoc/Layout/Layout";

class App extends Component {


  render() {

    return (
        <Layout>
          <div className={'App'}>
            <div>
              <div className={'Header'}>
                <h1>Добро пожаловать на сайт воспоминаний!</h1>
              </div>

              <h2 className={'Title'}>ПРОВОДЫ И ЗАЩИТА ДИПЛОМА</h2>
              <PictureBox block={this.props.sendoff}/>

              <h2 className={'Title'}>ОЖИДАНИЕ</h2>
              <PictureBox block={this.props.waiting}/>
            </div>
          </div>
        </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    sendoff: state.sendoff,
    waiting: state.waiting,
  }
}

export default connect(mapStateToProps)(App);
