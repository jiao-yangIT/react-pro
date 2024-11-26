import React, { Component } from 'react';

class FormInput extends Component {

    handleSubmit(ev) {
        ev.preventDefault();
        console.log(this.refs.userName.value)
    }

    render() {
        return(
            <>
                <form onSubmit={(ev)=> {this.handleSubmit(ev)}}>
                    <input type='text' ref='userName' />
                    <input type='submit' />
                </form>
            </>
        )
    }
}

export default FormInput
