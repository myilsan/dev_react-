function getData(callback, param1, param2) {
  setTimeout(() => {
    const data1 = {
      name: "최경호",
      sex: "남자",
      address: "경기도 고양시 일산서구",
      message: () => alert(`이름 : ${data1.name} ${param1.a}`),
    };
    const data2 = {
      name: "박진영",
      age: 28,
      sex: "여자",
      address: "경기도 고양시 일산서구",
      message: () => alert(`이름 : ${data2.name} ${param2.b}`),
    };
    callback(data1, data2);
  }, 2000);
}

getData(
  (data1, data2) => {
    data1.message();
    data2.message();
    console.log(data1);
    console.log(data2);
  },
  { a: "파라미터" },
  { b: "파라미터2" }
);

/*
 * Promise를 사용한 예제
 * 1. Promise 객체를 생성
 * 2. Promise 객체의 resolve() 메소드를 호출
 * 3. Promise 객체의 then() 메소드를 호출
 * 4. Promise 객체의 then() 메소드의 콜백 함수에서 Promise 객체의 resolve() 메소드의 인자로 전달한 값에 접근
 * 5. 수정 반영해주세요Promise 객체의 catch() 메소드를 호출하여 에러 처리
 * 4. Promise 객체의 then() 메소드의 콜백 함수에서 Propumise 객체의 resolve() 메소드의 인자로 전달한 값에 접근
 * 5. 5번 main 에서 수정
 * 6. 6번째 branch에서 수정
 * 7. 7번째 branch에서 수정
 */

function getData2(param1, param2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data1 = {
        name: "최경호",
        sex: "남자",
        address: "경기도 고양시 일산서구",
        message: () => alert(`이름 : 최경호 ${param1.a}`),
      };
      const data2 = {
        name: "박진영",
        age: 28,
        sex: "여자",
        address: "경기도 고양시 일산서구",
        message: () => alert(`이름 : 박진영 ${param2.b}`),
      };
      resolve([data1, data2]);
    }, 2000);
  });
}

async function showData() {
  const [data1, data2] = await getData2({ a: "파라미터" }, { b: "파라미터2" });
  data1.message();
  data2.message();
  console.log(data1);
  console.log(data2);
}

showData();
