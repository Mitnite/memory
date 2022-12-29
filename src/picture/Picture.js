import React from "react";
import './Picture.css';

const Picture = props => {
  return (
      <div className={'Picture'}>
        <img src={props.url}/>
      </div>
  )
}
export default Picture
