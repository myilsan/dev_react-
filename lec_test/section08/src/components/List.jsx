import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem.jsx";

const List=({todos})=>{

    const [search,setSearch] = useState("");
    
    const  onChangeSearch = (e)=> {
        setSearch(e.target.value);
    };

    return (
    
        <div className="List">
            <h4>Todo List 🏹</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력해주세요" />
            <div className="todos_wrapper">
                {todos.map((todo) =>{
                    return <TodoItem key={todo.id} {...todo}/>

                })}
               
            </div>
        </div>
    );

};

export default List;