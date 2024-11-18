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
import { useReducer } from "react";

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기내용",
  },
  {
    id: 3,
    createDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기내용",
  },
];

// 1 ."1" : 모든일기 조회하는 페이지
// 2. "new" : 새로운 일기를 작성하는 new페이지
// 3.. "diary" : 일기를 상세히 조회하는 diary
//

function reducer(state, action) {
  return state;
}

function App() {
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav("new");
  // };

  const [data, dispatch] = useReducer(reducer, mockData);

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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/New" element={<New />}></Route>
        <Route path="/Diary/:id" element={<Diary />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
