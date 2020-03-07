import React, { Component } from 'react';

class List extends Component {
    
    infoItem = () => {
        alert(this.props.index);
    }
    render() {
        return (
            <ul id="todo-list">
                <li className="item">
                    { this.props.children }
                    <a id="mobile" href="#" />
                    <i id="delete0" className="delete fas fa-trash" aria-hidden="true" />
                    <i id="edit0" className="edit fas fa-user-edit" aria-hidden="true" />
                    <i id="info0" className="info fas fa-info-circle" aria-hidden="true" onClick={ () => this.infoItem() }/>
                </li>
            </ul>
        );
    }
}

export default List;