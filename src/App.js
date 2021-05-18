import react from 'react';
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar.component/navbar';
import Fotter from './components/fotter.component/fotter.component';
import Productspage from './pages/productspage/productspage';
import SignIn from './pages/sign-in-page/sign-in-page';
import SignUp from './pages/sign-up-page/sign-up-page';
// for routing
import { Route, Redirect } from 'react-router-dom';
// firebase
import { auth, savingUserInfo, firestore } from './firebase/firebase';
// connecting react to redux
import { connect } from "react-redux";
// redux setUser action 
import  SetUser  from "./redux/user/user-action";

class App extends react.Component{
  unSubscribeAuth = null;
  componentDidMount(){
    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await savingUserInfo(userAuth);
        userRef.onSnapshot(snapshot=>{
          return this.props.setUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        })
      }
      return this.props.setUser(null);
    })
  }  

  

  componentWillUnmount(){
    this.unSubscribeAuth();
  }

  render(){
    return (
        <div className="App">
            <Navbar/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/products" component={Productspage}/>
                <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/" />):(<SignIn />)} />          
                <Route exact path="/signup" render={()=>this.props.currentUser?(<Redirect to="/" />):(<SignUp   />)} />          
            <Fotter/>
        </div>
    ); 
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(SetUser(user))
});

export default connect(null,mapDispatchToProps)(App);