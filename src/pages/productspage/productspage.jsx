import react from 'react';
import productData from '../../PRODUCTS_DATA'

class Productspage extends react.Component{
    constructor(){
        super();
        this.state = {
            extend : false
        }
    }

    render(){
        return(
            <h1>products</h1>
        )
    }
}

export default Productspage;