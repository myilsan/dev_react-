import {useReducer} from "react"

//reducer: 변환기
//-> 상태를 실제로 변화시키는 변환기 역활
function reducer(state, action){
    console.log(state, action);

}

const Exam =()=>{
    //dispatch : 발송하다, 급송하다
    //-> 상태 변화가 있어야 한다. 사실을 알리는 , 발송하는 함수 
    const [state, dispatch] = useReducer(reducer,0); 
    const onClickPlus = ()=>{

        dispatch({
            type: "INCREASE",
            DATA : 1,
        });
    }

    return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
    </div>
    );
};

export default Exam;