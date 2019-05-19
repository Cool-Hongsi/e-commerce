import React from 'react';
import './NavBar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
    this.setState({
      isOpen: !this.state.isOpen
        })
    };
    
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">BRAND</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <input type="text" placeholder="Search For" />
                    </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Wish</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"><i class="fas fa-shopping-cart"></i></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
    );
  }
}