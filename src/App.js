import react from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar.component/navbar";
import Fotter from "./components/fotter.component/fotter.component";
import Productspage from "./pages/productspage/productspage";
import SignIn from "./pages/sign-in-page/sign-in-page";
import SignUp from "./pages/sign-up-page/sign-up-page";
import productData from "./PRODUCTS_DATA";

import { StartFetchingData } from "./redux/productData/productData.action";

// for routing
import { Route, Redirect } from "react-router-dom";
// firebase
import {
  auth,
  savingUserInfo,
  firestore,
  savingProductsCollection,
} from "./firebase/firebase";
// connecting react to redux
import { connect } from "react-redux";
// redux setUser action
import {SetUser} from "./redux/user/user-action";
// cart component
import Cart from "./components/cart.component/cart.component";

class App extends react.Component {
  unSubscribeAuth = null;
  componentDidMount() {
    const { fetchProductData } = this.props;
    fetchProductData();
    // this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await savingUserInfo(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       return this.props.setUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    // });

    // savingProductsCollection('Products', Object.keys(productData).map(key => ({
    //   category:key,
    //   items:productData[key].items
    // })))
  }

  componentWillUnmount() {
    // this.unSubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products/:productCat" component={Productspage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignIn />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignUp />
          }
        />
        <Cart />
        <Fotter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(SetUser(user)),
  fetchProductData: () => dispatch(StartFetchingData()),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
