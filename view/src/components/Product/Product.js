import React from 'react';
import './Product.css';

import MainContainer from '../MainContainer/MainContainer';
import image from '../../image/hong.png';
import { Container, Row, Col } from 'reactstrap';
import ProductList from './ProductList';

var items = [
    {
        img : image,
        price : 100,
        name : "A"
    },
    {
        img : image,
        price : 200,
        name : "B"
    },
    {
        img : image,
        price : 300,
        name : "C"
    },
    {
        img : image,
        price : 400,
        name : "D"
    },
    {
        img : image,
        price : 500,
        name : "E"
    }
]

export default class Product extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array : items,
            value : ''
        }

        this.handleChange = this.handleChange.bind(this);
        // this.highFilter = this.highFilter.bind(this);
        // this.lowFilter = this.lowFilter.bind(this);
    }

    handleChange = (e) => {
        let sortedData = this.state.array;

        if(e.target.value === 'low-price'){
            sortedData = sortedData.sort((a, b) => {
                return a.price - b.price;
            })
        }
        
        else if(e.target.value === 'high-price'){
            sortedData = sortedData.sort((a, b) => {
                return b.price - a.price;
            })
        }

        this.setState({
            array : sortedData,
            value : e.target.value
        })
    }

    // highFilter = () => {
    //     let highFiltered = this.state.array;

    //     highFiltered.sort((a, b) => {
    //         return b.price - a.price;
    //     });

    //     this.setState({
    //         array : highFiltered
    //     });

    //     console.log(this.state.array);
    // }

    // lowFilter = () => {
    //     this.setState({
    //         array : items.sort((a, b) => {
    //             return a.price - b.price;
    //         })
    //     });
        
    //     console.log(this.state.array);
    // }

    render(){
        return(
            <MainContainer>
                <div className="Filter">
                    <span>Order By </span>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="select">Select</option>
                        <option value="low-price">Low Price</option>
                        <option value="high-price">High Price</option>
                    </select>
                    {/* <Button onClick={this.highFilter}>High</Button>
                    <Button onClick={this.lowFilter}>Low</Button> */}
                </div>
                <div className="Product-outside">
                    <div className="Product-inside">
                        <Container>
                            <Row>
                                {this.state.array.map((el, index) => {
                                    return(
                                        <Col key={index} xs="12" sm="6" md="4" lg="3" xl="3">
                                            <ProductList image={el.img} price={el.price} name={el.name} />
                                        </Col>
                                )})}
                            </Row>
                        </Container>
                    </div>
                </div>
            </MainContainer>
        )
    }
}
