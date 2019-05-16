import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="Navbar-outside">
                    <div className="Navbar-inside">

                        <div className="Navbar-logo">
                            BRAND
                        </div>

                        <div className="Navbar-searchbar">
                            <input className="search-txt" type="text" placeholder="Search for" />
                            <button className="search-btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                        <div className="Navbar-nav">
                            <ul>
                                <li><a className="active" href="/">Cart</a></li>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">About</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}