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
 * Promise를 사용한 예제(relase에서 수정)
 * 1. Promise 객체를 생성
 * 2. Promise 객체의 resolve() 메소드를 호출
 * 3. Promise 객체의 then() 메소드를 호출
 * 4. Promise 객체의 then() 메소드의 콜백 함수에서 Promise 객체의 resolve() 메소드의 인자로 전달한 값에 접근
 * 5. 수정 반영해주세요Promise 객체의 catch() 메소드를 호출하여 에러 처리
 * 4. Promise 객체의 then() 메소드의 콜백 함수에서 Propumise 객체의 resolve() 메소드의 인자로 전달한 값에 접근
 * 5. release 에서 수정합니다.
 * 6. local 수정합니다.
 *
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

// getData3 함수 (Promise와 에러 처리 예제)
function getData3(param1, param2, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error("데이터를 가져오는 데 실패했습니다.")); // 에러 시 reject 호출
        return;
      }

      const data1 = {
        name: "김철수",
        sex: "남자",
        address: "서울시 강남구",
        message: () => alert(`이름 : ${data1.name} ${param1.a}`),
      };
      const data2 = {
        name: "이영희",
        age: 30,
        sex: "여자",
        address: "서울시 서초구",
        message: () => alert(`이름 : ${data2.name} ${param2.b}`),
      };
      resolve([data1, data2]);
    }, 2000);
  });
}

// getData3 사용 예제 (async/await와 try...catch)
async function showData3() {
  console.log("\n--- getData3 호출 (성공 케이스) ---");
  try {
    const [data1, data2] = await getData3(
      { a: "새로운 파라미터" },
      { b: "새로운 파라미터2" }
    );
    data1.message();
    data2.message();
    console.log("getData3 성공:", data1);
    console.log("getData3 성공:", data2);
  } catch (error) {
    console.error("getData3 에러:", error.message);
  }

  console.log("\n--- getData3 호출 (실패 케이스) ---");
  try {
    await getData3({ a: "실패 테스트" }, { b: "실패 테스트2" }, true); // shouldReject를 true로 설정하여 실패 유도
  } catch (error) {
    console.error("getData3 (실패 케이스) 에러:", error.message);
  }
}

showData3();
