import React, { Component } from 'react';
import Form from '../Container/Form/Form';
import DeletePopup from './DeletePopup/DeletePopup';
import EditPopup from './EditPopup/EditPopup';
import InfoPopup from './InfoPopup/InfoPopup';
import List from './TodoList/List';

class Container extends Component {
    render() {
        return (
            <div className="container">

                <Form />

                <List index={0}>How i know this</List>

                <List index={1}>Let me love you</List>

                <List index={2}>This just a joke</List>

                <InfoPopup />

                <EditPopup />

                <DeletePopup />

            </div>
        );
    }
}

export default Container;