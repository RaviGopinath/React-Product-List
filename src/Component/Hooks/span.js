import React from "react";

function Span(props){
    return <span style={{marginLeft : 20}}>{props.children}</span>
}

export default React.memo(Span);

// when ever the value of this span will not change this component will not re-render because of React.memo()
// Re-renders only when the value changes