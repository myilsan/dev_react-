import { useNavigate, useParams } from "react-router-dom";
import Hearder from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  //console.log(params);
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이타 로딩중...!</div>;
  }

  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createDate));

  //console.log(curDiaryItem);
  return (
    <div>
      {/* {params.id} 번째 일기입니다. */}
      <Hearder
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
