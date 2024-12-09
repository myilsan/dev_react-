import { useNavigate, useParams } from "react-router-dom";
import Hearder from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  //console.log(params);
  return (
    <div>
      {/* {params.id} 번째 일기입니다. */}
      <Hearder
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
};

export default Diary;
