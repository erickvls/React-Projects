import React, {Component} from 'react';
import { Products } from '../api/Products';
import { ProductItem } from '../components/ProductItem';
import './Products.css';

export class ProductList extends React.Component{
    state = {
        products:[]
    }
    async componentWillMount(){
        const { items } = await Products.getProducts();
        console.log(items);
        this.setState({products:items});
        console.log(this.state.products[0]);
    }

    render(){
        return(
            <div>
                <p>asdasd</p>
              
                
                {this.state.products.map( p => {
                 
                    <ProductItem product={p}/>  
                 
                })}
            
            </div>
        );
    }
}