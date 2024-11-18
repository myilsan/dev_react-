import { useParams } from "react-router-dom";

export default function Edit() {
  const params = useParams();
  console.log(params);
  return <div>{params.id} 번째 수정일기입니다.</div>;
}
