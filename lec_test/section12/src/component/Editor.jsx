import { useEffect, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const getStringedDate = (targetDate) => {
  // 날짜 --> YYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};

export default function Editor({ initData, onSubmit }) {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
      });
    }
  }, [initData]);

  // 달력 선택 이벤트
  const onChangeInput = (e) => {
    //console.log(e.target.name); //어떤요소의 값이 들어온건지
    // console.log(e.target.value); // 입력된 값이 무었인지

    // date 객체가 string 이라 date객체로 변환필요
    let name = e.target.name;
    let value = e.target.value; //선택한한 날짜

    if (name === "createDate") value = new Date(value);

    setInput({
      ...input,
      [name]: value, //변경된 값만 업데이트
    });
  };

  //const emotionId = 2;

  const onclickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>

        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
          {/* <EmotionItem emotionId={1} emotionName={"완전좋음"} />
        <EmotionItem emotionId={2} emotionName={"좋음"} />
        <EmotionItem emotionId={3} emotionName={"그럭저럭"} />
        <EmotionItem emotionId={4} emotionName={"나쁨"} />
        <EmotionItem emotionId={5} emotionName={"끔찍함"} /> */}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onclickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
}
