import React from 'react';
import './Searchbar.css';

export default class Searchbar extends React.Component{
    render(){
        return(
            <div>
                <div className="Searchbar-outside">
                    <div className="Searchbar-inside">
                        <input className="search-txt" type="text" placeholder="Search for" />
                        <button className="search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}