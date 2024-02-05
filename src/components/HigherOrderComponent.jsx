import { useState } from "react"

const HigherOrderComponent=(OriginalComponent)=>{
    function NewComponent(){
        const [state,setstate]=useState(0);

        const handleClick=()=>{
            setstate(state+1);
        }
        return <OriginalComponent state={state} handleClick={handleClick}/>
    }
    return NewComponent;

    };
export default HigherOrderComponent;
