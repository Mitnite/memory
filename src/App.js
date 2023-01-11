import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import PictureBox from "./components/PictureBox/PictureBox";
import Layout from "./hoc/Layout/Layout";


class App extends Component {

state ={
  sendoff: 0,
  waiting: 0,
  ministry: 0,
  photo_session: 0,
  birthday: 0,
  chokopai: 0,
  mulled: 0,
  trampoline: 0,

}

  listenScrollEvent = e => {
    if (this.state.sendoff === 0) {
      let sendoff = this.getHeight('sendoff')
      this.setState({sendoff})
    }

    if (this.state.waiting === 0) {
      let waiting = this.getHeight('waiting')
      this.setState({waiting})
    }

    if (this.state.ministry === 0) {
      let ministry = this.getHeight('ministry')
      this.setState({ministry})
    }

    if (this.state.photo_session === 0) {
      let photo_session = this.getHeight('photo_session')
      this.setState({photo_session})
    }

    if (this.state.birthday === 0) {
      let birthday = this.getHeight('birthday')
      this.setState({birthday})
    }

    if (this.state.chokopai === 0) {
      let chokopai = this.getHeight('chokopai')
      this.setState({chokopai})
    }

    if (this.state.mulled === 0) {
      let mulled = this.getHeight('mulled')
      this.setState({mulled})
    }

    if (this.state.trampoline === 0) {
      let trampoline = this.getHeight('trampoline')
      this.setState({trampoline})
    }


    console.log(this.state)

    if (window.scrollY > this.state.waiting && window.scrollY < this.state.ministry) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'

      document.getElementById('waiting').style.position = 'sticky'
    } else if (window.scrollY > this.state.ministry && window.scrollY < this.state.photo_session) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('ministry').style.position = 'sticky'
    } else if (window.scrollY > this.state.photo_session && window.scrollY < this.state.birthday) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('photo_session').style.position = 'sticky'
    } else if (window.scrollY > this.state.birthday && window.scrollY < this.state.chokopai) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('birthday').style.position = 'sticky'
    } else if (window.scrollY > this.state.chokopai && window.scrollY < this.state.mulled) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('chokopai').style.position = 'sticky'
    } else if (window.scrollY > this.state.mulled && window.scrollY < this.state.trampoline) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('mulled').style.position = 'sticky'
    } else if (window.scrollY > this.state.trampoline) {
      document.getElementById('sendoff').style.position = 'static'
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('trampoline').style.position = 'sticky'
    } else {
      document.getElementById('ministry').style.position = 'static'
      document.getElementById('photo_session').style.position = 'static'
      document.getElementById('birthday').style.position = 'static'
      document.getElementById('chokopai').style.position = 'static'
      document.getElementById('mulled').style.position = 'static'
      document.getElementById('trampoline').style.position = 'static'
      document.getElementById('waiting').style.position = 'static'

      document.getElementById('sendoff').style.position = 'sticky'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  getHeight = (id) => {
    let elem = document.getElementById(id);
    if (elem !== null) {
      let rect = elem.getBoundingClientRect();
      return rect.y
/*      this.setState({
        sendoff: rect.y
      })*/
    }
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

              <div style={{
                display: 'block',
                margin: '0 auto'

              }}>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                }}>
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
