import React, {Component} from "react";
import "./Layout.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

export default class Layout extends Component {

  state = {
    menu: false,
    links_2022: [
      {name: 'Проводы', link: '#sendoff'},
      {name: 'Ожидание', link: '#waiting'},
      {name: 'Заебавшие рожи', link: '#ministry'},
      {name: 'Летняя фотосессия', link: '#photo_session'},
      {name: 'День рождения', link: '#birthday'},
      {name: 'Чокопайки', link: '#chokopai'},
      {name: 'Глинтвейн', link: '#mulled'},
      {name: 'Поход на батуты', link: '#trampoline'}

    ],
    links_2023: [
      {name: 'Рыбинск', link: '#home'},
    ]
  }


  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
        <div className={'Layout'}>

          <Drawer
              isOpen={this.state.menu}
              onClose={this.menuCloseHandler}
              links_2022={this.state.links_2022}
              links_2023={this.state.links_2023}
          />

          <MenuToggle
              onToggle={this.toggleMenuHandler}
              isOpen={this.state.menu}
          />

          <main>
            {this.props.children}
          </main>
        </div>
    )
  }
}