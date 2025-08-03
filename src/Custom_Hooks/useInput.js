import { useState } from "react";

export function useInput(initValue)
{
    //Custm hooks  
    const  [inputValue , setInputValue_] = useState(initValue);  

    const handleChange = (e)=>{
      //console.log(e);
      setInputValue_(e.target.value);
    };

    const setInputValue =(e)=>
    {
        setInputValue_(e);
    };
    //callback test
    return [inputValue,setInputValue, handleChange,]
}
