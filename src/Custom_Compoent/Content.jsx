import React from 'react';

function Content(props)
{   
    //let teste = "test";

    //console.log(props);
    
    //console.log(this.props.title2);

    //const title2 = this.props.title2;
    console.log(props);
    return( 
        
        <div>
          Contents props: {props.text} 
        </div>
        
    )
}

const Content2 = () =>{
    return 

};

export default Content;