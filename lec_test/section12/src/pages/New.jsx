import Hearder from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  //저장하기
  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); //뒤로가기 방지 처리
  };

  return (
    <div>
      <Hearder
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text="< 뒤로가기" />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
