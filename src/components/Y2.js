import React from 'react';
import Y3 from './Y3';

function Y2(props) {
    return(
        <>
            <p>Y2组件: {props.age} </p> <Y3 {...props}></Y3>
        </>
    )
}
export default Y2