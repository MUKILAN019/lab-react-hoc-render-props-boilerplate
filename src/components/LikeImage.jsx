import React, { useState } from 'react'
import WrappedComponent from '../NewComponents/Wrappedcomponent'

 function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handleChange}>Like Image {props.state}</button>
    </div>
  )
}

let CompCall = WrappedComponent(LikeImage)
export default CompCall;