import React from 'react'
import "./style.css";

const UseState = () => {
    let initialData = 0;
    const [myNum,setMyNum] = React.useState(initialData)
    return (
        <>
            <div className="center-div">
                <p> {myNum} </p>
                <div className="buttons">
                    <div className="btns-1 btn" onClick={()=>setMyNum(myNum + 1)}>
                        INCR
                    </div>

                    <div className="btns-2 btn" onClick={()=> myNum > 0 ? setMyNum(myNum - 1): setMyNum(0)}>
                        DECR
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseState
