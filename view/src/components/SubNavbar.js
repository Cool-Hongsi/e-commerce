import React from 'react';
import './SubNavbar.css';

export default class SubNavbar extends React.Component{
    render(){
        return(
            <div>
                <div className="SubNavbar-outside">
                    <div className="SubNavbar-inside">                    
                        <ul>
                            <li><a href="/">SMOKING</a></li>
                            <li><a href="/">GIFT</a></li>
                            <li><a href="/">E-LIQUID</a></li>
                            <li><a href="/">E-CIGARETTER</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}