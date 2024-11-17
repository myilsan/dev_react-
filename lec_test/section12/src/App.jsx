import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

import { getEmotionImage } from "./util/get-emotion-image";

// 1 ."1" : 모든일기 조회하는 페이지
// 2. "new" : 새로운 일기를 작성하는 new페이지
// 3.. "diary" : 일기를 상세히 조회하는 diary

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("new");
  };
  return (
    <>
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
      <button onClick={onClickButton}> new로 이동하기</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/New" element={<New />}></Route>
        <Route path="/Diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
