import React, {Component} from "react";
import './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import DrawerItems from "./DrawerItems/DrawerItems";



export default class Drawer extends Component {

  state = {
    clicked: false
  }

  renderLinks() {
    return this.props.links.map((link, index) => {
      return (
          <DrawerItems
              key={index}
              link={link.link}
              name={link.name}
              onClick={this.props.onClose}
            />
      )
    })
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {

    const cls = ['Drawer']

    if (!this.props.isOpen) {
      cls.push('close')
    }

    return (
        <React.Fragment>

          <nav className={cls.join(' ')}>
            <ul>
              <div onClick={this.clickHandler}>2022 год</div>
              {this.state.clicked ? this.renderLinks() : null}
            </ul>
            <ul> <div>2023 год</div></ul>
          </nav>
          {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> :null}
        </React.Fragment>
    )
  }
}