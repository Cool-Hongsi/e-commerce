import React from 'react';
import './ProductList.css';

import { Button } from 'reactstrap';

export default class ProductList extends React.Component{

    // Once I store props value to state value, if I show the value within render(), the value will not be reflected as changed.
    // I should show the props value within render() directly without storing state in order to reflect changed value.
    
    render(){
        return(
            <div>
                {this.props.name !== "" ?
                    <div className="oneItem">
                        <img src={this.props.image} width="100px" height="100px" alt={this.props.name} />
                        <div>CAD $ {this.props.price}</div>
                        <div>{this.props.name}</div>
                        <Button color="primary">Add</Button><Button><i className="far fa-heart"></i></Button>
                    </div>
                : null}
            </div>
        )
    }
}