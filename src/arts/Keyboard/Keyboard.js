import React, { Component } from 'react';
import './Keyboard.scss';
import '../../shared/classes.scss';

export default class Keyboard extends Component {
    render() {
        return (
            <div className="keyboard-holder">
                <div className="keyboard center"></div>
            </div>
        )
    }
}
