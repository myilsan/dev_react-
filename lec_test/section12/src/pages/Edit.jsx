import { useParams, useNavigate } from "react-router-dom";
import Hearder from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStaticContext } from "../App";

import useDiary from "../hooks/useDiary"; //

export default function Edit() {
  const params = useParams();
  // console.log(params);
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    let result = window.confirm(
      "일기를 정말로 삭제 할까요? 다시는 복구되지 않아요!"
    );
    if (result) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    let result = window.confirm("일기를 정말 수정할까요?");
    if (result) {
      onUpdate(
        Number(params.id),
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  // const getCurrentDiaryItem = () => {
  //   const currentDiaryItem = data.find(
  //     (item) => Number(item.id) === Number(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     window.alert("존재하지 않는 일기 입니다!");
  //     nav("/", { replace: true });
  //   }
  //   return currentDiaryItem;
  // };

  // const currentDiaryItem = getCurrentDiaryItem();
  // console.log(currentDiaryItem);

  return (
    <div>
      <Hearder
        title={"일기수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type="NEGATIVE" />
        }
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
}
