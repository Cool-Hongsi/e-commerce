import React from 'react';
import './SideBar.css';

import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SideBar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            product1 : false,
            product2 : false,
            product3 : false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleClose = this.toggleClose.bind(this);
    }
    
    toggleOpen(value) {
        if(value === 'product1'){
            this.setState({
                product1: true
            });
        }
        else if(value === 'product2'){
            this.setState({
                product2: true
            });
        }
        else if(value === 'product3'){
            this.setState({
                product3: true
            });
        }
    }

    toggleClose(value) {
        if(value === 'product1'){
            this.setState({
                product1: false
            });
        }
        else if(value === 'product2'){
            this.setState({
                product2: false
            });
        }
        else if(value === 'product3'){
            this.setState({
                product3: false
            });
        }
    }

    render(){
        return(
            <div>
                <div className="SideBar-outside">
                    <div className="SideBar-inside">
                        <Container>
                            <Row>
                                <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                    <ButtonDropdown isOpen={this.state.product1} onMouseEnter={() => this.toggleOpen('product1')} onMouseLeave={() => this.toggleClose('product1')}>
                                        <DropdownToggle>
                                            Product1
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem header>Title</DropdownItem>
                                        <DropdownItem>AA</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>BB</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </Col>
                                <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                <ButtonDropdown isOpen={this.state.product2} onMouseEnter={() => this.toggleOpen('product2')} onMouseLeave={() => this.toggleClose('product2')}>
                                        <DropdownToggle>
                                            Product2
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem header>Title</DropdownItem>
                                        <DropdownItem>AA</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>BB</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </Col>
                                <Col xs="4" sm="4" md="4" lg="4" xl="4">
                                <ButtonDropdown isOpen={this.state.product3} onMouseEnter={() => this.toggleOpen('product3')} onMouseLeave={() => this.toggleClose('product3')}>
                                        <DropdownToggle>
                                            Product3
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem header>Title</DropdownItem>
                                        <DropdownItem>AA</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>BB</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}