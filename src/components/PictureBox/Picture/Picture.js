import React from "react";
import './Picture.css';

const Picture = props => {
  return (
      <div className={'Picture'}>
        <img src={props.url} alt='фотография'/>
      </div>
  )
}
export default Picture
