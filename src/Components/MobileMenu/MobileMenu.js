import React, { Component } from 'react';

class MobileMenu extends Component {
    render() {
        return (
            <div id="mobile-menu">
                <p id="mobile-content" />
                <p id="mobile-created-date" />
                <p id="mobile-modify-date" />
                <input id="mobile-change-input" type="text" />
                <button id="save">save</button>
                <button id="exit">exit</button>
          </div>
        );
    }
}

export default MobileMenu;