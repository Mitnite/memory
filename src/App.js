import './App.css';
import React, {Component} from "react";
import {connect} from "react-redux";
import PictureBox from "./components/PictureBox/PictureBox";
import Layout from "./hoc/Layout/Layout";


class App extends Component {

  listenScrollEvent = e => {
    // console.log(window.scrollY)
        if (window.scrollY > 3130 && window.scrollY < 5612) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('ministry').style.position = 'static'
          document.getElementById('photo_session').style.position = 'static'
          document.getElementById('birthday').style.position = 'static'
          document.getElementById('chokopai').style.position = 'static'
          document.getElementById('mulled').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'

          document.getElementById('waiting').style.position = 'sticky'
        } else if (window.scrollY > 5612 && window.scrollY < 15230) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('photo_session').style.position = 'static'
          document.getElementById('birthday').style.position = 'static'
          document.getElementById('chokopai').style.position = 'static'
          document.getElementById('mulled').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'
          document.getElementById('waiting').style.position = 'static'

          document.getElementById('ministry').style.position = 'sticky'
        } else if (window.scrollY > 15230 && window.scrollY < 20570) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('ministry').style.position = 'static'
          document.getElementById('birthday').style.position = 'static'
          document.getElementById('chokopai').style.position = 'static'
          document.getElementById('mulled').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'
          document.getElementById('waiting').style.position = 'static'

          document.getElementById('photo_session').style.position = 'sticky'
        } else if (window.scrollY > 20570 && window.scrollY < 24452) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('ministry').style.position = 'static'
          document.getElementById('photo_session').style.position = 'static'
          document.getElementById('chokopai').style.position = 'static'
          document.getElementById('mulled').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'
          document.getElementById('waiting').style.position = 'static'

          document.getElementById('birthday').style.position = 'sticky'
        } else if (window.scrollY > 24452 && window.scrollY < 31008) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('ministry').style.position = 'static'
          document.getElementById('photo_session').style.position = 'static'
          document.getElementById('birthday').style.position = 'static'
          document.getElementById('mulled').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'
          document.getElementById('waiting').style.position = 'static'

          document.getElementById('chokopai').style.position = 'sticky'
        } else if (window.scrollY > 31008 && window.scrollY < 35848) {
          document.getElementById('sendoff').style.position = 'static'
          document.getElementById('ministry').style.position = 'static'
          document.getElementById('photo_session').style.position = 'static'
          document.getElementById('birthday').style.position = 'static'
          document.getElementById('chokopai').style.position = 'static'
          document.getElementById('trampoline').style.position = 'static'
          document.getElementById('waiting').style.position = 'static'

          document.getElementById('mulled').style.position = 'sticky'
        } else if (window.scrollY > 35847) {
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
    photo_session: state.photo_session,
    birthday: state.birthday,
    chokopai: state.chokopai,
    mulled: state.mulled,
    trampoline: state.trampoline,
  }
}

export default connect(mapStateToProps)(App);
