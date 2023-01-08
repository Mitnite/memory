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

              <h2 className={'Title'} id='sendoff'>ПРОВОДЫ И ЗАЩИТА ДИПЛОМА</h2>
              <PictureBox block={this.props.sendoff}/>

              <h2 className={'Title'} id='waiting'>ОЖИДАНИЕ</h2>
              <PictureBox block={this.props.waiting}/>

              <h2 className={'Title'} id='ministry'>ЗАЕБАВШИЕ РОЖИ</h2>
              <PictureBox block={this.props.ministry}/>

              <h2 className={'Title'} id='photo_session'>ЛЕТНЯЯ ФОТОСЕССИЯ</h2>
              <PictureBox block={this.props.photo_session}/>

              <h2 className={'Title'} id='birthday'>ЛЕТНЯЯ ФОТОСЕССИЯ</h2>
              <PictureBox block={this.props.birthday}/>

              <h2 className={'Title'} id='chokopai'>ЧОКОПАЙКИ</h2>
              <PictureBox block={this.props.chokopai}/>

              <h2 className={'Title'} id='mulled'>ГЛИНТЕЙН!!!</h2>
              <PictureBox block={this.props.mulled}/>

              <h2 className={'Title'} id='trampoline'>Неожиданный поход в батутку</h2>
              <PictureBox block={this.props.trampoline}/>


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
    ministry: state.ministry,
    photo_session: state.photo_session,
    birthday: state.birthday,
    chokopai: state.chokopai,
    mulled: state.mulled,
    trampoline: state.trampoline,
  }
}

export default connect(mapStateToProps)(App);
