import React from 'react';

function Y3(props) {
    return(
        <>
            Y3组件:
            {props.money}
            <button onClick={()=> { props.change({name: 'YJJ01', age: 30}) }}>单向数据传递按钮</button>
        </>
    )
}
export default Y3