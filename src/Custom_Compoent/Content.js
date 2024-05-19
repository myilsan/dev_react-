import React from 'react';


function Content()
{   
    //let teste = "test";

    //console.log(teste);
    
    //console.log(this.props.title2);

    const title2 = this.props.title2;
    console.log(title2);
    return( 
        
        <div>
            {this.props.title2}컨텐즈 내용입니다.
        </div>
    )
    
}
export default Content;