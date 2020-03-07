import React, { Component } from 'react';

class InfoPopup extends Component {
    render() {
        return (
            
            <div id="info-popup">
                <p id="content" />
                <p id="created-date" />
                <p id="modifited-date">modified date :</p>
                <button id="exit">Exit</button>
            </div>
        );
    }
}

export default InfoPopup;