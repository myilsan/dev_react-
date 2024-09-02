import { useState ,useContext} from "react";
import "./List.css";
import TodoItem from "./TodoItem.jsx";
import {TodoStateContext} from "../App.jsx"

const List=()=>{



    const todos = useContext(TodoStateContext); //1개일때는 배열로 인식하기때문에 {todos} 구조분해 할당으로 가져오지 않음

    const [search,setSearch] = useState(""); //검색 useState    
    const  onChangeSearch = (e)=> {
        setSearch(e.target.value);
    };

    //검색 필터링 처리 하기
    const getFilteredData =()=>{
        if(search ==""){
            return todos;
        }
        
        return todos.filter((e)=> 
            e.content.toLowerCase().includes(search.toLowerCase())) //소문자도 적용함.toLowerCase();
    }

    //검색결과 처리
    const filteredTodos = getFilteredData();
    return (
    
        <div className="List">
            <h4>Todo List 🏹</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력해주세요" />
            <div className="todos_wrapper">
                
                {
                //todos.map((todo) =>{ --> filteredTodos.map((todo) 변경처리 수정
                filteredTodos.map((todo) =>{    
                    return <TodoItem key={todo.id} {...todo}  />
                })}
               
            </div>
        </div>
    );

};

export default List;
