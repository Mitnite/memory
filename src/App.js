import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import PictureBox from "./components/PictureBox/PictureBox";
import Layout from "./hoc/Layout/Layout";


class App extends Component {

  state = {
    links: [
      {name: 'sendoff', h: 0},
      {name: 'waiting', h: 0},
      {name: 'ministry', h: 0},
      {name: 'photo_session', h: 0},
      {name: 'birthday', h: 0},
      {name: 'chokopai', h: 0},
      {name: 'mulled', h: 0},
      {name: 'trampoline', h: 0},
    ]
  }

  listenScrollEvent = e => {

    this.state.links.forEach((link) => {
      if (link.h === 0) {
        this.getHeight(link.name)
      }
    })

    this.state.links.forEach((link) => {
      if (window.scrollY > link.h) {
        document.getElementById('sendoff').style.position = 'static'
        document.getElementById('ministry').style.position = 'static'
        document.getElementById('photo_session').style.position = 'static'
        document.getElementById('birthday').style.position = 'static'
        document.getElementById('chokopai').style.position = 'static'
        document.getElementById('mulled').style.position = 'static'
        document.getElementById('trampoline').style.position = 'static'
        document.getElementById('waiting').style.position = 'static'
        document.getElementById(link.name).style.position = 'sticky'
      }
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  getHeight = (id) => {
    let elem = document.getElementById(id);
    this.state.links.forEach((link) => {
      if (link.name === id && link.h === 0) {
        if (elem !== null) {
          let rect = elem.getBoundingClientRect();
          link.h = rect.y
          const links = [...this.state.links]
          links.forEach((links) => {
            if (links.name === link.name) {
              links.h = link.h
            }
          })
          this.setState({links})
        }
      }
    })
  }


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
              <div className={'container'}>
                <div className={'row'}>
                  <PictureBox block={this.props.photo_session_left}/>
                  <PictureBox block={this.props.photo_session_right}/>
                </div>
              </div>

              <h2 className={'Title'} id='birthday'>День рождения</h2>
              <PictureBox block={this.props.birthday}/>

              <h2 className={'Title'} id='chokopai'>ЧОКОПАЙКИ</h2>
              <PictureBox block={this.props.chokopai}/>

              <h2 className={'Title'} id='mulled'>ГЛИНТВЕЙН!!!</h2>
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
    photo_session_left: state.photo_session_left,
    photo_session_right: state.photo_session_right,
    birthday: state.birthday,
    chokopai: state.chokopai,
    mulled: state.mulled,
    trampoline: state.trampoline,
  }
}

export default connect(mapStateToProps)(App);
