import React from 'react';
import './MainContainer.css';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

export default class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                <SideBar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}