import React, {Component} from "react";
import './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import DrawerItems from "./DrawerItems/DrawerItems";



export default class Drawer extends Component {

  state = {
    clicked_2022: false,
    clicked_2023: false
  }

  renderLinks(links) {
    return links.map((link, index) => {
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

  click22Handler = () => {
    this.setState({
      clicked_2022: !this.state.clicked_2022
    })
  }

  click23Handler = () => {
    this.setState({
      clicked_2023: !this.state.clicked_2023
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
              <div onClick={this.click22Handler}>2022 год</div>
              {this.state.clicked_2022 ? this.renderLinks(this.props.links_2022) : null}
            </ul>
            <ul>
              <div onClick={this.click23Handler}>2023 год</div>
              {this.state.clicked_2023 ? this.renderLinks(this.props.links_2023) : null}
            </ul>
          </nav>
          {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> :null}
        </React.Fragment>
    )
  }
}