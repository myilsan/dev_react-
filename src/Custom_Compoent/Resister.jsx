import { useState } from "react";
/*********************************
 * input box useState 처리방법
*********************************/
//1.이름
//2.생년월일
//3.국정

const Resister =()=>{
    
    const [input,setInput] = useState({
        name :"",
        birth:"",
        country:"",
    });

    const onchange =(e)=>{
        setInput({
            ...input, //스프레드 연산자 - 이렇게 해야 변경되어도 다른 textbox 데이타가 초기화 되지 않음 
            [e.target.name] :e.target.value,
            
        });
    };
  
    /** 각각 처리 하지
    const onChangeName =(e) =>{ 
        setName(e.target.value);
        //console.log(e.target.value);
    };
   
    const onChangeBirth =(e)=>{
        setBirth(e.target.value);
    }
    **/

    const collback_test = (n, callback)=>{
        setTimeout(()=>{
            const aa = n +1;

            if(callback){
                callback(aa);
            }

        },3000)
        
    };
    
/** 
    collback_test(100,(e)=>{
        console.log(e);

    })
    
**/
    collback_test(390,res)
    
   function res(e) 
    {
        console.log(e);

    }
    



    return(
        <>
        <div>
            <input name="name" value={input.name} onChange={onchange} placeholder={"이름"} />{input.name}
        </div>
        <div>
            <input name="birth" type="date" onChange={onchange} placeholder={"생일"}/>{input.birth}
        </div>

        <div>
            <select name ="country" onChange={onchange} >
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
            {input.country}
        </div>
        </>

    );

};

export default Resister;