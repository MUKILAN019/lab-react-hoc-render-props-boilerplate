import { useState } from "react";

function Counter({render}){
const[count,setcount]=useState(0)

const changeHandle = () =>{
    setcount(count+1)}

return render({count,changeHandle})}
export default Counter;