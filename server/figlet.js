const figlet = require('figlet') 

figlet("I LOVE YOU.",(error,data)=>{

    if(error){
        console.log("에러가 발생했습니다.");
        console.log(error);
        return;
    }

    console.log(data);
        
})