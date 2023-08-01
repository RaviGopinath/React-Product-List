import React,{useState,useCallback} from "react";
import Buttons1 from './button1';
import Span from "./span";

// This method is used protect the application from whole componenet redering
//  without any values changing their Component. React.Memo protects the component if values does not change
//   but it redenrs every time the value changes. So these useCallback proetects the component from redering.

// useCallback used to store a function in react internal memeory

//when the componenet renders these function were not recreated

function Demo1(props){

    let [count, updateCounts] = useState(0);
    let [active, updateActive] = useState(false); // states are not recreated by the react when component rendering, instead it just updates the state value except first initialisation

    let increaments = useCallback(function (){
        if(active)
            updateCounts(++count);
    },[active]) // In this line if you didn't pass the active argument, react doesn't update its memory and the count value doesn't change

    let decreaments = useCallback(function decreaments(){
        if(active)
            updateCounts(--count);
    },[active])
    
    function activate(){
        updateActive(true);
    } // if you didn't use this function you don't need to pass the active argument is in useCallback function

    return(
        <React.Fragment>
            <Buttons1 clickEventHandler={decreaments}>-</Buttons1>
            <Span>{count}</Span>
            <Buttons1 clickEventHandler={increaments}>+</Buttons1>
            <Buttons1 clickEventHandler={activate}>Activate</Buttons1>
        </React.Fragment>
    )
}

export default React.memo(Demo1);

// like useCallback stores fucntion not to recreate the same way we can use useMemo() to stores 
// values that not to recreate or reders when the component renders

// e.x

// let list = useMemo(() => {
//     return [100, 200];
// },[])

// you can use this list variable where you want and it will not going to recreate or reders
// because the 100 and 200 is constant

// Like you can use this for api response, anyway its not going to change and you can use it