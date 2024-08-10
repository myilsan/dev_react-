import {memo} from "react";
import "./TodoItem.css";

const TodoItem =({id,isDone,content,date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton =()=>{
        onDelete(id);
    };

    return(
        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// export default memo(TodoItem,(prevProps, nextProps)=>{
    
//     //memo 얕은 비교를 하기때문 함수는 비교할수 없어 아래와 같이 건건이 처리 함.
//     // 함수와 같은 것을 재 렌더링 하지 않게 하려면 useCollback사용한다.

//     //반환값에 따라서 , props 바뀌었는지 안바뀌었는지 판단
//     // T --> Props 바뀌지 않음 -->렌더링 X
//     // F --> Props 바뀜 --> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.Date) return false;

//     return true;

// });

//onUpdate,onDelete 호출되는 페이지에서 useCollback 처리했으므로 memo만 사용처리 하면됨
export default memo(TodoItem); 
