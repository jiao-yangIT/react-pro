import React, { Component } from 'react';
import { connect } from 'react-redux'
function Counter(props) {
    return(
        <div>
            <button>+1</button>
            <span>{props.count}</span>
            <button>-1</button>
        </div>
    )
}

const mapStateToProps = state=> ({
    count: state.count
})
export default connect(mapStateToProps)(Counter)