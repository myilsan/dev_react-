//props 객체로 받아서 처리
function Button(props)
{
    console.log(props);
    return (
      <button style={{color:props.color}}> {props.text} 
      {props.children}
      </button>

    );

    Button.defaultProps = {
        color: "black",
    };
};

//props 넘어온 변수 그대로 사용해도 됨
//children 
const Button2 = ({text,color,children})=>{
    return(
        <button style={{color:color}}> {text} 
        {children}
        </button>
    );

};

export default Button2;