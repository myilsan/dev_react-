
import './App.css'
import { useRef, useState, useReducer } from "react";
import Header from './components/Header'
import Editer from './components/Editer'
import List from './components/List'
import Exam from './components/Exam.jsx'


const mockData =[
  {
     id :0,  
     isDone : false,
     content : "점심먹구 운동하기",
     date : new Date().getTime()

  },
  {
   id :1,  
   isDone : false,
   content : "탄수화물 줄이기",
   date : new Date().getTime()

  },
  {
   id :2,  
   isDone : false,
   content : "꺼꾸로 식사법 지키기",
   date : new Date().getTime()
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
  };

  const onUpdate = (targetId) => {
  };

  const onDelete = (targetId) => {
  };

  return (
    <div className="App">
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      /> */}
    </div>
  );
}
export default App
