import React,{ Component } from 'react';
import { Products } from '../api/Products'

export class ProductComponent extends React.Component{
    state = {
        product:{}
    }

    async componentWillMount(){
        const product = await Products.getProductById(this.props.match.params.id);

        this.setState({ product })
        console.log(this.state.product)
    }


    render() {
        return(
            <div className="product-page">
                {this.state.product.image &&
                <img src={this.state.product.image} alt=""/>}
                <h3>{this.state.product.name}</h3>
                <span className="product-price">
                    <b>Price:</b>
                    {this.state.product.price}
                   
                </span>
                <p className="product-description">
                <b>Description:</b>
                {this.state.product.description}
                </p>
            </div>
        );
    }
}