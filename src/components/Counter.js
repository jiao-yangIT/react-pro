import React, { Component } from 'react';
import { connect } from 'react-redux'
function Counter(props) {
            return(
                <div>
                    {/*修改state的值时不直接修改，通过dispatch指令传递给reducer，再里面进行修改*/}
                    <button onClick={()=> { props.dispatch({ type: 'add'})}}>+1</button>
                    <button onClick={()=> { props.dispatch({ type: 'add_w', payload: 5})}}>+5</button>
                    <span>{props.count}</span>
                    <button onClick={()=> { props.dispatch({ type: 'adc'})}}>-1</button>
                </div>
            )
}

const mapStateToProps = state=> ({
    count: state.count
})
export default connect(mapStateToProps)(Counter)