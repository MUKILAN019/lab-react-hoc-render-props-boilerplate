import React, { useState } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function LikePost(props) {
  console.log(props)
 



  return (
    <div>
      <button onClick={props.handleClick}>Like Post {props.state}</button>
    </div>
  )
}
let componentCall=HigherOrderComponent(LikePost);
export default componentCall;
