function LikePost1(props) {

    return (
      <div>
        <button onClick={props.handleclick}>Like Post {props.count}</button>
      </div>
    )
  }
  export default LikePost1;