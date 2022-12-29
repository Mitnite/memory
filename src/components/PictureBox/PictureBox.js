import React from "react";
import Picture from "./Picture/Picture";

const PictureBox = props => {
  return (
      <div>
        {props.block.map((picture, index) => {
          return (
              <Picture
                  key={index}
                  url={picture.url}
              />
          )
        })}
      </div>
  )
}
export default PictureBox
