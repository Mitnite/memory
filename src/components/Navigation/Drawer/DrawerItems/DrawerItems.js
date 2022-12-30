import React from "react";
import './DraweItems.css'

const DrawerItems = props => {

  return (
      <li className={'DrawerItems'} onClick={props.onClick}>
        <a href={props.link}> {props.name} </a>
      </li>
  )
}
export default DrawerItems
