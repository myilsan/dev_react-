
import './App.css'
import Header from './components/Header'
import Editer from './components/Editer'
import List from './components/List'

import {useState ,useRef} from  'react'


function App() {
  const mockData =[
     {
        id :1,  
        isDone : false,
        content : "점심먹구 운동하기",
        date : new Date().getTime()

     },
     {
      id :2,  
      isDone : false,
      content : "탄수화물 줄이기",
      date : new Date().getTime()

     },
     {
      id :3,  
      isDone : false,
      content : "꺼꾸로 식사법 지키기",
      date : new Date().getTime()
     }
  ];

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);
  const onCreate =(content)=>{
    const newTodo = {
      id :idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    };

    setTodos([newTodo, ...todos]);
  };

    //check 선택 처리 하기 
  const onUpdate =(targetId)=>{
      //todos state의 값들 중에 targetId 와 일치하는  id를 갖는  투두 아이템의 isDone 변경
    setTodos(todos.map((e)=>{
            if(e.id == targetId){
              return {...e, isDone : !e.isDone} 
            }
            return e;
          }));

  };

  const onDelete =(targetId)=>{
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((e)=> e.id != targetId));
  };


  return (
    <>
    <div className='App'>
    <Header />
    <Editer onCreate={onCreate} />
    <List  todos={todos} onUpdate={onUpdate}  onDelete={onDelete} />
    </div>
    
    </>
    
  )
}

export default App
