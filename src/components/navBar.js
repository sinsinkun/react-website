import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class navBar extends Component {
    render() {
        return (
            <div className = 'navBar'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/link'><li>Link</li></Link>
                <Link to='/about'><li>About</li></Link>
            </div>
        );
    }
}

export default navBar;