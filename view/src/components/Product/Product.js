import React from 'react';
import './Product.css';

import MainContainer from '../MainContainer/MainContainer';
import image from '../../image/hong.png';
import { Container, Row, Col } from 'reactstrap';
import ProductList from './ProductList';

export default class Product extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array : [
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
                },
            ]
        }
    }

    render(){
        return(
            <MainContainer>
                <div className="Product-outside">
                    <div className="Product-inside">
                        <Container>
                            <Row>
                                {this.state.array.map((el) => {
                                    return(
                                        <Col xs="12" sm="6" md="4" lg="3" xl="3">
                                            <ProductList image={el.img} price={el.price} name={el.name} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </div>
                </div>
            </MainContainer>
        )
    }
}