import react from "react";
import productData from "../../PRODUCTS_DATA";
import { Route, Link } from "react-router-dom";
import ProductCatDisplayPanel from "./ProductsCatDisplayPanel";
// page stylesheet
import "./productspage.stylesheet.scss";
// display image
import imageDumy from "../../images/categories.images/switches.jpg";
// cart reducer action to add items to cart
import cartAddItemAction from "../../redux/cart/cart-additem-action";
import { connect } from "react-redux";
// select cart items
import { selectCartItems } from "../../redux/cart/cart-selectors";



class Productspage extends react.Component {
  

  // getProducts(productCat) {
  //   let { productsData } = this.state;

  //   this.setState({
  //     products: productsData[productCat].items,
  //     displayAnimate: productsData[productCat].displayImg,
  //   });
  // }

  render() {
    // Array of Categories
    const dataArr = Object.keys(productData);
    return (
      <div className="productsPage">
        <div className="productCatBtns">
          {dataArr.map((category) => {
            return (
              <Link
                to={`/products/${category}`}
                style={{ textDecoration: "none" }}
              >
                <button className="productCatBtn">{category}</button>
              </Link>
            );
          })}
        </div>

        <Route exact={"products/:productCat"} component={ProductCatDisplayPanel} />

        

        {/* {this.state.displayAnimate ? (
          <div className="productAnimation">
            <img
              src={this.state.displayAnimate[0]}
              alt="switch-display-animate-img"
              id="switchDisplay1"
            />
            <img
              src={this.state.displayAnimate[1]}
              alt="switch-display-animate-img"
              id="switchDisplay2"
            />
          </div>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});


export default connect(mapStateToProps)(Productspage);
