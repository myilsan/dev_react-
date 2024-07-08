
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
      content : "노래 연습하기",
      date : new Date().getTime()

     },
     {
      id :3,  
      isDone : false,
      content : "빨래하기",
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


  return (
    <>
    <div className='App'>
    <Header />
    <Editer onCreate={onCreate} />
    <List  todos={todos} onUpdate={onUpdate}  />
    </div>
    
    </>
    
  )
}

export default App
