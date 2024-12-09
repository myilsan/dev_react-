import { useContext, useState, useEffect } from "react";
import { DiaryStaticContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStaticContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  // 마운트 되었을때 실행되도록 nav 작동되게 하기위함이다.
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기 입니다!");
      nav("/", { replace: true });
    }

    // 러턴이 되지 않기 때문에 useState 를 사용한다.
    //return currentDiaryItem;
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
