import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form id="submit-form" action="#">
                <input type="text" name="input" id="input" placeholder="Add New" autoFocus />
            </form>  
        );
    }
}

export default Form;