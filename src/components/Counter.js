import React, { Component } from 'react';
import { connect } from 'react-redux'
function Counter(props) {
            return(
                <div>
                    {/*修改state的值时不直接修改，通过dispatch指令传递给reducer，再里面进行修改*/}
                    <button onClick={props.add}>+1</button>
                    <button onClick={()=> { props.add_w(5)}}>+5</button>
                    <span>{props.count}</span>
                    <button onClick={props.adc}>-1</button>
                </div>
            )
}

const mapStateToProps = state=> ({
    count: state.count
})

const mapDispatchToProps = dispatch=> ({
    add() {
        dispatch({ type: 'add'})
    },
    add_w(payload) {
        dispatch({ type: 'add_w', payload})
    },
    adc() {
        dispatch({ type: 'adc'})
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)