import React, { Component } from 'react';

class DeletePopup extends Component {
    render() {
        return (
            <div id="delete-popup">
                <p>Are you sure want to delete this item?</p>
                <button id="yes">Yes</button>
                <button id="no">No</button>
            </div>
        );
    }
}

export default DeletePopup;