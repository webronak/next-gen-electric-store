import * as React from "react";
import { Route, Link } from "react-router-dom";
import SpinnerComponent from "../../components/spinner.component/Spinner.componnent";

// import productData from "../../PRODUCTS_DATA";
import ProductCard from "./productCard-component";
// cart reducer action to add items to cart
import cartAddItemAction from "../../redux/cart/cart-additem-action";
import { connect } from "react-redux";

const ProductCatDisplayPanel = ({ match, cartAddItem, productData, isFetching }) => {
   
    const [productItems, setProductItems] = React.useState([]);
 
  React.useEffect(() => {
    Object.keys(productData).map((key) => {
      if (productData[key].forURL === match.params.productCat)
        setProductItems(productData[key].items);
       
    });
  }, [match.params.productCat,[]]);

  return (
    
    <div className="productsCardContainer">
    {
      isFetching?(
        <>
            <SpinnerComponent/>
            
            </>
      ):(
        <>
        {
        !productItems.length?(
           <span>NO PRODUCT AVAILABLE...</span>
            ):productItems.map((product) => {
        return <ProductCard product={product} cartAddItem={cartAddItem} key={product._id} />;
      })}
        </>
      )
    }
     
    </div>
   
  );
};

const mapStateToProps = (state) => ({
  productData: state.productData.data,
  isFetching: state.productData.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItemAction(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatDisplayPanel);
