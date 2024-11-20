import { useSearchParams } from "react-router-dom";
import Hearder from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // console.log(params.get("value"));

  return (
    <div>
      <Hearder
        title={"2024년 2월"}
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
