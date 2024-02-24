import React, { useState } from 'react'
import WrappedComponent from '../NewComponents/Wrappedcomponent';

function LikePost(props) {

  return (
    <div>
      <button onClick={props.handleChange}>Like Post {props.state}</button>
    </div>
  )
}

let ComponentCall = WrappedComponent(LikePost)
export default ComponentCall;
