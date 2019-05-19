import React from 'react';
import './ProductList.css';

import { Button } from 'reactstrap';

export default class ProductList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            image : this.props.image,
            price : this.props.price,
            name : this.props.name
        }
    }

    render(){
        return(
            <div>
                {this.state.name !== "" ?
                    <div className="oneItem">
                        <img src={this.state.image} width="100px" height="100px" alt={this.state.name} />
                        <div>CAD $ {this.state.price}</div>
                        <div>{this.state.name}</div>
                        <Button color="primary">Add</Button><Button><i class="far fa-heart"></i></Button>
                    </div>
                : null}
            </div>
        )
    }
}