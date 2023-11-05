import React, { useEffect } from 'react'
import "./style.css";

const UseEffect = () => {
    // let initialData = 0;
    const [myNum, setMyNum] = React.useState(0)

    React.useEffect(()=>{
        document.title = `My App (${myNum})`;
    });
    // [empty Array]-> ab hum jab page ko first time open/reload karenga thu ye useEffect wala  
    // content print huga uske bad nhi.

    return (
        <>
            <div className="center-div">
                <p> {myNum} </p>
                <div className="buttons">
                    <div className="btns-1 btn" onClick={() => setMyNum(myNum + 1)}>
                        INCR
                    </div>``
                </div>

            </div>
        </>
    )
}

export default UseEffect
