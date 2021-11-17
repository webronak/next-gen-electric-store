import react from 'react';
import './sign-up-page.stylesheet.scss';
import { connect } from "react-redux";
import {
    StartSignInWithGoogle,
  } from "../../redux/user/user-action";
// firebase
import { auth, signInWithGoogle, savingUserInfo } from "../../firebase/firebase";

class SignUp extends react.Component{
    constructor(){
        super();
        this.state={
            name:"",
            phone:"",
            email:"",
            pass:"",
            Cpass:"",
            emailErr:"",
            passErr:"",
            CpassErr:"",
            phoneErr:"",
            nameErr:"",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email, pass, Cpass } = this.state;
        const displayName = name;
        if(name === ""){
            return this.setState({nameErr:"Enter your name!"});            
        }
        if(phone === ""){
            return this.setState({phoneErr:"Enter your phone number!"});            
        }
        if(email === ""){
            return this.setState({emailErr:"Enter your email!"});            
        }
        if(pass === ""){
            return this.setState({passErr:"Create your password!"});            
        }
        if(Cpass === ""){
            return this.setState({CpassErr:"Confirm your password!"});            
        }
        if(phone.length < 10 && phone.length > 1 ){
            return this.setState({phoneErr:"Phone is less than 10 digits!"});
        }
        if(pass !== Cpass){
            return this.setState({passErr:"Your password is not matching!"});
        }
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            return this.setState({emailErr:"Your email is not valid!"});   
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, pass);
            await savingUserInfo(user, { displayName, phone });
            return alert("u are signed up!!!!!");
        }catch(err){
            this.setState({error:`${err.message}`})
        }
        
    }

    render(){

        const { signInWithGoogle } = this.props;

        return(
            <div className="signIn-signUp">
                <div className="head">
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        sign Up
                    </h2>    
                </div>

                <form onSubmit={ this.handleSubmit }>
                    <input 
                        name="name" 
                        placeholder="Enter Name" 
                        type="text" 
                        onChange={ this.handleChange }
                    />
                    <br/>
                    <small style={{color:"red"}}>{this.state.nameErr?this.state.nameErr:""}</small>
                    <br/>
                    <input 
                        name="phone" 
                        placeholder="Enter Phone No." 
                        type="digit" 
                        onChange={ this.handleChange }
                    />
                    <br/>
                    <small style={{color:"red"}}>{this.state.phoneErr}</small>
                    <br/>
                    <input 
                        name="email" 
                        placeholder="Enter Email" 
                        type="text" 
                        onChange={ this.handleChange }
                    />
                    <br/>
                    <small style={{color:"red"}}>{this.state.emailErr}</small>
                    <br/>
                    <input 
                        name="pass" 
                        placeholder="Create Password" 
                        type="text" 
                        onChange={ this.handleChange }
                    />
                    <br/>
                    <small style={{color:"red"}}>{this.state.passErr}</small>
                    <br/>
                    <input 
                        name="Cpass" 
                        placeholder="Confirm Password" 
                        type="text" 
                        onChange={ this.handleChange }
                    />
                    <br/>
                    <small style={{color:"red"}}>{this.state.CpassErr}</small>
                    <br/>
                    <div className="input-buttons">
                        <button type="submit">sign in</button>
                        <button className="googleBtn" onClick={ signInWithGoogle }>continue with google 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signInWithGoogle: () => dispatch(StartSignInWithGoogle()),
    
  });

export default connect(null, mapDispatchToProps)(SignUp); 