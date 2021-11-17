import react from "react";
import "./sign-in-page.stylesheet.scss";
// for routing
import { Link } from "react-router-dom";
// firebase
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { connect } from "react-redux";
import {
  StartSignInWithGoogle,
  StartSignInWithEmailPass,
} from "../../redux/user/user-action";

class SignIn extends react.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      email: "",
      pass: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = async (event) => {
    event.preventDefault();
    const { signInWithEmailPass } = this.props;
    const { email, pass } = this.state;
    signInWithEmailPass({ email, pass })
  };

  render() {
    const { signInWithGoogle, signInErrorMsg } = this.props;

    return (
      <div className="signIn-signUp">
        <div className="head">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            sign in
          </h2>
        </div>

        <form onSubmit={this.submitHandler}>
          <input
            name="email"
            placeholder="Enter Email"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="pass"
            placeholder="Enter Password"
            type="password"
            onChange={this.handleChange}
          />
          <br />
          {this.props.currentUser ? (
            <small style={{ backgroundColor: "rgb(92, 190, 0)" }}>
              You are signed in as {this.props.currentUser.displayName}! Go to{" "}
              <Link to="/">homepage</Link>.
            </small>
          ) : (
            <small style={{ backgroundColor: "rgb(248, 0, 0)" }}>
              If you don't have account! Then <Link to="/signup">sign up.</Link>
            </small>
          )}

          <div className="input-buttons">
            <button type="submit">sign in</button>
            <button
              type="button"
              className="googleBtn"
              onClick={() => signInWithGoogle()}
            >
              continue with google
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  signInErrorMsg:  state.user.error?.message || ""
});

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(StartSignInWithGoogle()),
  signInWithEmailPass: (state) => dispatch(StartSignInWithEmailPass(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
