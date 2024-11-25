import React from 'react';
import Y2 from './Y2';

function Y1(props) {
    return(
        <>
            Y1组件: {props.name}   <Y2 { ...props}></Y2>
        </>
    )
}
export default Y1