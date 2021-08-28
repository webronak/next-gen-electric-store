import * as React from "react";
import { Route, Link } from "react-router-dom";
import productData from "../../PRODUCTS_DATA";
import ProductCard from "./productCard-component";
// cart reducer action to add items to cart
import cartAddItemAction from "../../redux/cart/cart-additem-action";
import { connect } from "react-redux";

const ProductCatDisplayPanel = ({ match, cartAddItem }) => {


    const [productItems, setProductItems] = React.useState([...productData[match.params.productCat].items]);

React.useEffect(() => {
    setProductItems([...productData[match.params.productCat].items]);
},[match.params.productCat])

    return (
        <div className="productsCardContainer">
            {productItems.map((product) => {
                return (
                    <ProductCard
                        product={product}
                        cartAddItem={cartAddItem}
                    />
                );
            })}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (item) => dispatch(cartAddItemAction(item)),
});

export default connect(null, mapDispatchToProps)(ProductCatDisplayPanel);
