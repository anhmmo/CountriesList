import React, { Component } from 'react';

class EditPopup extends Component {
    render() {
        return (
            <div id="edit-popup">
                <input id="old-item" type="text" />
                <button id="change">Change</button>
                <button id="cancel">Cancel</button>
            </div>
        );
    }
}

export default EditPopup;