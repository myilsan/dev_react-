
import './App.css'
import { useRef, useState, useReducer ,useCallback} from "react";
import Header from './components/Header'
import Editor from "./components/Editor";
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

  const onCreate_ = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  const onCreate = useCallback(onCreate_,[]); //마운트 되었을때만 한번만 실행되고, 리랜더링시 실행되지 않는다.

  const onUpdate_ = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };  
  const onUpdate = useCallback(onUpdate_,[]);

  const onDelete_ = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };   
  const onDelete = useCallback(onDelete_,[]);


  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}
export default App
