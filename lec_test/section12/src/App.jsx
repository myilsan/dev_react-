import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./component/Button";
import Hearder from "./component/Header";
import { createContext, useReducer, useRef } from "react";

const mockData = [
  {
    id: 1,
    createDate: new Date("2024-12-21").getTime(),
    emotionId: 1,
    content: "1번 일기내용",
  },
  {
    id: 2,
    createDate: new Date("2024-12-22").getTime(),
    emotionId: 2,
    content: "2번 일기내용",
  },
  {
    id: 3,
    createDate: new Date("2024-11-20").getTime(),
    emotionId: 3,
    content: "3번 일기내용",
  },
];

// 1 ."1" : 모든일기 조회하는 페이지
// 2. "new" : 새로운 일기를 작성하는 new페이지
// 3.. "diary" : 일기를 상세히 조회하는 diary
//

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      console.log('Updating item:', action.data); // 디버깅용 로그
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => {
        //{ } 가 들어갈 경우 return 을 해주어야 함.
        return String(item.id) !== String(action.id);
      });
    default:
      return state;
  }

  return state;
}

export const DiaryStaticContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav("new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4); //아이디값생성을 위함

  //*********로컬스토리지 test
  localStorage.setItem("test", "hello");
  //스토리지는  스트링으로 저장되기 때문에 JSON.stringify 저장함.
  localStorage.setItem("person", JSON.stringify({ name: "최경호" }));

  console.log(localStorage.getItem("test"));
  //스트링으로 저장된것을 객제로 가져와야 하기때문에 JSON.parse 이용함
  console.log(JSON.parse(localStorage.getItem("person")));

  localStorage.removeItem("test"); //삭제

  const onCreate = (createDate, emotionId, content) => {
    //새로운 일기를 추가
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createData, emotionId, constent) => {
    //기존 일기 수정
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createData,
        emotionId,
        constent,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      {/* <Hearder
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text="123."
        type={"DEFAULT"}
        onClick={() => {
          alert("클릭하셨습니다.");
        }}
      />

      <Button
        text="123."
        type={"POSITIVE"}
        onClick={() => {
          alert("클릭하셨습니다.");
        }}
      />

      <Button
        text="123."
        type={"NEGATIVE"}
        onClick={() => {
          alert("클릭하셨습니다.");
        }}
      />

      <img src={getEmotionImage(1)} />
      <img src={getEmotionImage(2)} />
      <img src={getEmotionImage(3)} />
      <img src={getEmotionImage(4)} />
      <img src={getEmotionImage(5)} />
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/New"}>Now </Link>
        <Link to={"/Diary"}> Diary </Link>
      </div>
      <button onClick={onClickButton}> new로 이동하기</button> */}
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "추가 테스트");
        }}
      >
        일기추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
        }}
      >
        일기 수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button>
      {/*데이타 프롭스로 공급받도록  createContext 사용 */}
      <DiaryStaticContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/New" element={<New />}></Route>
            <Route path="/Diary/:id" element={<Diary />}></Route>
            <Route path="/Edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStaticContext.Provider>
    </>
  );
}

export default App;
