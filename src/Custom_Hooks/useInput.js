import { useState } from "react";

export function useInput(initValue) {
  //Custm hooks return an array of 3 values
  //1. inputValue
  //2. setInputValue
  //3. handleChange
  const [inputValue, setInputValue_] = useState(initValue);

  const handleChange = (e) => {
    //console.log(e);
    setInputValue_(e.target.value);
  };

  const setInputValue = (e) => {
    setInputValue_(e);
  };
  //callback 입니다.11111
  return [inputValue, setInputValue, handleChange];
}
