import React, {Component} from 'react';
import { Products } from '../api/Products';
import { ProductItem } from '../components/ProductItem';
import './Products.css';

export class ProductList extends Component{
    state = {
        products:[]
    }
    async componentWillMount(){
        const { items } = await Products.getProducts();
        console.log(items);
        this.setState({products:items});
        
    }

    render(){
        return(
            <ul className="products-list">
                
                {this.state.products.map( p => {
                 
                    <ProductItem product={p}/>  
                  
                })}
            </ul>
        );
    }
}