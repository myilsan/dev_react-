import  { Component, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { useInput } from './Custom_Hooks/useInput';

import Content from './Custom_Compoent/Content.jsx';
import Button from './Custom_Compoent/Button.jsx';
import Resister from './Custom_Compoent/Resister.jsx';


function App() {

  /**input text 처리부분 */
  //const  [inputValue , setInputValue] = useState("");  
  //const handleChange = (e)=>{
  //  console.log(e);
  //  setInputValue(e.target.value);
  //};

  const [inputValue, setInputValue ,handleChange] = useInput(""); //사용자 hookd 1줄로 처리한다.
  const hadleSubmit =()=>{
    if(inputValue =="") {alert("검색어를 넣어주세요");   return false; }      
    alert(`${inputValue}를 입력하였습니다.`);

  };

  const  [data , setdata] = useState("useState");  
  const handleClick =()=> { setdata("useState변경되었습니다..") };

  const title =["번호","이름","이메일","주소","전화번호","website"];
 
  //https://jsonplaceholder.typicode.com/users
  //http://localhost:4000/user/test?q=myilsan44&name=myilsan.&age=20

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를
        // 놓치지 않고 처리하기 위해서는
        // catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  
  
  const DataList = items.map((d, idx)=>{
    //console.log(d,idx);
    return( 
      <tr key={idx}>
        <td>{idx+1}</td>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>{d.address.city}{d.address.street}</td>
      </tr>
     );
  });
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

  return (
   

    <div className="App">
      <div className='App-Top'>
        TOP. 메뉴
      </div>
      <a onClick={function(e){alert("클릭");e.preventDefault();}}>function alert 호출</a>
      <p />
      <a onClick={(e)=>{alert("test")}}>(e) 클릭</a>
      <p></p>
      <a href="#" onClick={handleClick}>{data} </a>
     
      <h1>fetch 데이타 가져오기</h1>
      <div  className="List">        
        <table>
          <colgroup>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
          </colgroup>
          <caption></caption>
          <thead>
          <tr>
            <th>{title[0]}</th>
            <th>{title[1]}</th>
            <th>{title[2]}</th>
            <th>{title[3]}</th>
          </tr>
          </thead> 
          <tbody>
            {DataList}
          </tbody>
        </table>
      </div>
    <Content text ={"전달합니다."} />
     <div>
      <h1>useInput</h1>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <button onClick={hadleSubmit}>확인</button>
      </div>
    <p></p>     
     버튼 컴포턴트 테스트 :  
      <Button text={"메일"} color={"red"}></Button>
      <Button text={"카페"} ></Button>
      <Button text={"블로그"} color={"blue"}></Button>

      <Resister></Resister>


    </div>
  );
  }
}


function Subject2() {
  const  handleEventClick = (e)=>{
    e.preventDefault();
 
  };

  function click2()
  {
      alert("click2 호출");
  }
    return(
        <header>
            <h1>Web</h1>
             <a href="/" onClick={handleEventClick}> link1 </a> 
             <p></p>
             <a href="/" onClick={(e)=>{alert("클릭");e.preventDefault();}}> link2 </a> 

        </header>       
        
     
    );
}


export default  App;

// 컴포넌트는 3가지 상황에  리렌더링 되는경우 3가지(관련없는 다른 컴포넌트 도 리렌더링 됨으로 부하발생)
// 1. 자신이 관리하는 state 변경되었을때
// 2. 자신이 관리하는 props 변경되었을때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트로 리렌더링 된다.
//해결 방법 : 변경시 관련이 없다면 컴퍼넌트로 분리해주면 해결된다.