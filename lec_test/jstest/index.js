function getdata(callback) {
  setTimeout(function () {
    const data = {
      name: "최경호",
      sex: "남자",
      adress: "경기도 고양시 일산서구",
      message: () => alert("만나서 반갑습니다1."),
    };
    const data2 = {
      name: "박진영",
      sex: "여자",
      adress: "경기도 고양시 일산서구",
      message: () => alert("만나서 반갑습니다1."),
    };
    callback(data, data2);
  }, 2000);
}

getdata((data, data2) => {
  console.log(data.message());
  console.log(data);
  console.log(data2);
});
