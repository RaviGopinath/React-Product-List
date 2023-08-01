import React,{useReducer} from "react";

//Demo for UseReducer
function countings(currentState,action){
    switch(action){
        case "increment" :
            return {count : currentState.count + 1};
        case "decrement" :
            return {count : currentState.count - 1};
        default :
            return currentState;
    }
}


function Demo(){

    let [state, updateCount] = useReducer(countings, {count : 0});

    function increament(){
        updateCount('increment')
    }

    function decrement(){
        updateCount('decrement');
    }
    return (
        <React.Fragment>
            <button className="btn btn-primary btn-space" onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button className="btn btn-primary btn-space" onClick={increament}>+</button>
        </React.Fragment>
    )
}

export default Demo;