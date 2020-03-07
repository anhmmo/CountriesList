import React, { Component } from 'react';

class DeleteBox extends Component {
    render() {
        return (
            <div id="delete-box">
                <p id="delete-counter" />
                <i id="delete-all-item" className="fas fa-trash-alt" />
                <span className="delete-tooltip">delete selected items</span>
          </div>
        );
    }
}

export default DeleteBox;