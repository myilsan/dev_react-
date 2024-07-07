
import { useState ,useRef } from "react";
import "./Editor.css"



const Editer=({onCreate}) => {
    const [content,setContent] = useState("");
    const onChangeContent =(e) =>{
        setContent(e.target.value);
    };

    const contentRef = useRef();
    const  onSubmit =()=>{
        if(content == ""){
            //alert("새로운 todoList 등록해주세요!");
            contentRef.current.focus();
            return ;
        }
            
        onCreate(content);
        setContent("");
    };

//Enter 처리
    const onKeydown =(e)=>{
        alert(e.keyCode);
        if(e.keyCode ==13){
            onSubmit();
        }
    };


    
    return( 
        <div className="Editor">
            <input 
                onKeyDown={onKeydown} 
                ref={contentRef} 
                value={content} 
                onChange={onChangeContent} 
                placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>

        </div>
    );

};

export default Editer;