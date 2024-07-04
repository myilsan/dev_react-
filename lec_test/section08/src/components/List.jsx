import "./List.css";
import TodoItem from "./TodoItem.jsx";
const List=()=>{
    return (
    
        <dev className="List">
        <h4>Todo List 🏹</h4>
        <input placeholder="검색어를 입력해주세요" />
        <div className="todos_wrapper">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
        </dev>
    );

};

export default List;