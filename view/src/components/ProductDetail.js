import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import MainContainer from './MainContainer';
import './ProductDetail.css';

class ProductDetail extends Component {

    render(){
        return(
            <div>
                <MainContainer>
                    <Container className="product-detail">
                        <Row>
                            <Col xs="6">
                                <div className="pd-detail-img">
                                    Image
                                </div>
                            </Col>
                            <Col xs="6">
                                <h1>Product Name</h1>
                                <h3>CAD Price</h3>
                                <span className="tags">#Tags</span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quisquam laudantium aliquam modi illo provident enim blanditiis illum nulla voluptatum laboriosam ut odio et tempore. Sint optio quam aliquid rerum
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <div className="bt-group">
                                <Button color="primary" className="pd-btn">Add to Cart</Button>
                                <Button outline color="primary" className="pd-btn"><i class="far fa-heart"></i></Button>
                            </div>
                        </Row>
                    </Container>
                </MainContainer>
            </div>
        )
    }

}

export default ProductDetail;