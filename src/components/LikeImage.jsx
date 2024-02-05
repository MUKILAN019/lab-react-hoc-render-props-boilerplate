import React, { useState } from 'react'
import HigherOrderComponent from './HigherOrderComponent'
 function LikeImage(props) {
  console.log(props)

 

  return (
    <div>
      <button onClick={props.handleClick}>Like Image {props.state}</button>
    </div>
  )
}
let componentCall=HigherOrderComponent(LikeImage);
export default componentCall;