import React, { useState } from 'react';

// reactjs 16.8 --- hooks
const FuncComp = (props) => { 
    const [data,setData] = useState(false);
    const [loading, setloading] = useState(false)
    

    if(loading) return <div>spinner</div>
    return (
        <div>
           <Button onClick={() => setloading(true)}/> 
           <div>{props.title.toUpperCase()}</div>
        </div>
    );
};

export default FuncComp;