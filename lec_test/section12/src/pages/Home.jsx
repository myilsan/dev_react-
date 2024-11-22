import { useSearchParams } from "react-router-dom";
import Hearder from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import { useState, useContext } from "react";
import { DiaryStaticContext } from "../App";
import { DiaryDispatchContext } from "../App";

//
const getMonthlyDate = (pivotDate, date) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  //console.log("beginTime", beginTime);
  //console.log("endTime", endTime);

  return date.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime
  );
};

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value"));

  const data = useContext(DiaryStaticContext);

  //title 월/일 처리
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlydata = getMonthlyDate(pivotDate, data);

  // >> 쪽 버튼 클릭
  const onIncreseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  //<< 쪽ㅂ 버튼 클릭
  const onDecreseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Hearder
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreseMonth} text="<" />}
        rightChild={<Button onClick={onIncreseMonth} text=">" />}
      />
      <DiaryList data={monthlydata} />
    </div>
  );
};

export default Home;
