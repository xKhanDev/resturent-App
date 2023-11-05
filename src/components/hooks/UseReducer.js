import React from 'react'
import "./style.css";

const reducerFunction = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    // if nothing call this will returned
    return state;
}
const UseReducer = () => {
    // const [myNum,setMyNum] = React.useState(0) //-->useState & useReducer is same
    // useReducer used for Big Projects and it also return two vlaues. and it take 2 Arguments
    // const [currentState, disPatchMethod] = React.useReducer(reducerFunction,initialData);
    // dispatch is used to trigger reducerFunction & inside reducerFunction we have update data (setMyNum) like.

    // const initialData = 0;
    const [state, disPatchMethod] = React.useReducer(reducerFunction, 0);
    return (
        <>
            <div className="center-div">
                <p> {state} </p>
                <div className="buttons">
                    <div className="btns-1 btn" onClick={() => disPatchMethod({ type: "INCR" })}>
                        INCR
                    </div>

                    <div className="btns-2 btn" onClick={() => disPatchMethod({ type: "DECR" })}>
                        DECR
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseReducer;
