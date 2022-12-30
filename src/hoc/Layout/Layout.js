import React, {Component} from "react";
import "./Layout.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

export default class Layout extends Component {

  state = {
    menu: false,
    links: [
      {name: 'Проводы', link: '#sendoff'},
      {name: 'Ожидание', link: '#waiting'}
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
              links={this.state.links}
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