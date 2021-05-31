import react from "react";
import productData from "../../PRODUCTS_DATA";
// page stylesheet
import "./productspage.stylesheet.scss";
// display image
import imageDumy from "../../images/categories.images/switches.jpg";
// cart reducer action to add items to cart
import cartAddItemAction from '../../redux/cart/cart-additem-action';
import { connect } from 'react-redux';

class Productspage extends react.Component {
  constructor() {
    super();
    this.state = {
      productsData: productData,
      products: [],
      displayAnimate: "",
    };
  }

  getProducts(productCat) {
    let { productsData } = this.state;

    this.setState({
      products: productsData[productCat].items,
      displayAnimate: productsData[productCat].displayImg,
    });
  }

  render() {
    // Array of Categories
    const dataArr = Object.keys(productData);
    return (
      <div className="productsPage">
        <div className="productCatBtns">
          {dataArr.map((category) => {
            return (
              <button
                className="productCatBtn"
                onClick={() => {
                  this.setState({ displayAnimate: "" });
                  this.getProducts(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="productsCardContainer">
          {this.state.products.map((product) => {
            return (
              <div className="productCard">
                <div
                  className="productImg"
                  style={{ backgroundImage: `url(${imageDumy})` }}
                ></div>
                <div className="productDesc">
                  <div className="nameAndPrice">
                    <div>
                      <p className="productName">{product.name}</p>
                      <small className="productShortDesc">
                        {product.desc}
                        <br />
                        packaging: {product.packing}
                      </small>
                    </div>
                    <div className="Productprice">
                      <p>$40</p>
                    </div>
                  </div>
                  <div className="productColor">
                    <p>color</p>
                  </div>
                  <button className="buyBtn" onClick={()=>this.props.cartAddItem(product)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-cart-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {this.state.displayAnimate ? (
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
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    cartAddItem: item => dispatch(cartAddItemAction(item))
})

export default connect(null,mapDispatchToProps)(Productspage);
