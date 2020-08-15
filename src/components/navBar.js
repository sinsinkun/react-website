import React, {Component} from 'react';
import '../App.css';

class navBar extends Component {
    render() {
        return (
            <div className = 'navBar'>
                <a href='/'>Home</a>
                <a href='/'>Link</a>
                <a href='/'>About</a>
            </div>
        );
    }
}

export default navBar;