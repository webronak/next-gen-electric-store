import react from 'react';
import './navbar.stylesheet.scss';
// for routing
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
// connect react to redux
import { connect } from "react-redux";
// logo
import logo from '../../images/logo.png'
import CartDisplayAction from '../../redux/cart/cart-display-action';
// total cart item quantity cart items
import { selectCartItemTotalQuantity } from '../../redux/cart/cart-selectors';

class Navbar extends react.Component{
    constructor(){
        super();
        this.state = {
                navLinks:['Home','products','contact','about us'],
                toggle: false
            }
    }
    render(){
        return(
            <div className="navbar">
                <div className="branding">
                    <img src={logo} alt="logo" id="logo" />
                    <h1>Electricals</h1>
                </div>
                <ul className={this.state.toggle? "navLinks toggle-navLinks" : "navLinks"}>
                    {this.state.navLinks.map((link,index)=>{
                        return <Link to={link==='Home'?"":link==='products'?"products/sockets":link} key={index}>
                            <li onClick={()=>this.setState({toggle:false})}>{link}</li>
                        </Link>
                    })}
                </ul>

                {/* buttons for cart and whtsapp */}
                <div className="actionBtns">
                    <button id="cart" onClick={()=>this.props.setCartToggle()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        cart
                        {
                            this.props.totalCartItemsQuantity>0
                            ?<span className="countDisplay"><small>{this.props.totalCartItemsQuantity}</small></span>
                            :''
                        }
                    </button>
                    <button id="call">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        whatsapp
                    </button>
                </div>


                {/* signIn and signOut button */}
                {
                    this.props.currentUser?
                        <Link to="/">
                            <button 
                                style={{backgroundColor:"rgb(248, 0, 0)"}}
                                id="signIn" 
                                onClick={()=>{ 
                                    auth.signOut(); 
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                signout
                            </button>
                        </Link>                                
                    :                
                        <Link to="/signin">
                            <button id="signIn" style={{backgroundColor:"rgb(92, 190, 0)"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                signin
                            </button>
                        </Link>
                    
                }

                {/* burger button for toggle navlink */}
                <div className="toggleBtn" onClick={()=>this.setState({toggle:!this.state.toggle})}>
                    <div id={this.state.toggle?"toggle-line1":"line1"}></div>
                    <div id={this.state.toggle?"toggle-line2":"line2"}></div>
                    <div id={this.state.toggle?"toggle-line3":"line3"}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
    totalCartItemsQuantity: state.cart.cartItems.reduce((acc,cartItem)=>acc + cartItem.quantity,0),
}); 
const mapDispatchToProps = dispatch => ({
    setCartToggle:()=>dispatch(CartDisplayAction())
});
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);