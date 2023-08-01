import React from "react";

function Buttons1(props){
    return <button className="btn btn-primary" onClick={props.clickEventHandler} style={{marginLeft : 20}}>{props.children}</button>
}

export default React.memo(Buttons1);