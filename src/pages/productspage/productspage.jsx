import react from "react";
// import productData from "../../PRODUCTS_DATA";
import { Route, Link } from "react-router-dom";
import ProductCatDisplayPanel from "./ProductsCatDisplayPanel";
// page stylesheet
import "./productspage.stylesheet.scss";
import { connect } from "react-redux";
// select cart items
import { selectCartItems } from "../../redux/cart/cart-selectors";


class Productspage extends react.Component {
  state={
    loading:true
  }


  // getProducts(productCat) {
  //   let { productsData } = this.state;

  //   this.setState({
  //     products: productsData[productCat].items,
  //     displayAnimate: productsData[productCat].displayImg,
  //   });
  // }

  render() {
    const {productData} = this.props;
    // Array of Categories
    const dataArr = Object.keys(productData);
    console.log(productData,"productData")
    return (
      <div className="productsPage">
        <div className="productCatBtns">
          {dataArr.map((category,i) => {
            return (
              <Link
                to={`/products/${productData[category].forURL}`}
                style={{ textDecoration: "none" }}
                key={i}
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
  productData: state.productData.data
});


export default connect(mapStateToProps)(Productspage);
