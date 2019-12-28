import React, { Component } from "react";
import Firebase from "firebase";
import firebaseConfig from "./config";

// TODO: validate/register through Firebase
// TODO: onSubmit handler --> AdminPanel.js
// FIXME: email and password inputs not working

var firebase = Firebase.initializeApp(firebaseConfig);
var user = firebase.auth().currentUser;

class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
      // user: null
    };
  }

  // check if user is logged in or not
  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });
    if (user) {
      this.setState({ user });
      // localStorage.setItem("user", user.uid);
      console.log(user);
    } else {
      this.setState({ user: null });
      // localStorage.removeItem("user");
      console.log(user);
    }
  }

  login(event) {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        console.log(error, "Invalid email and password");
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            className="form-control"
            id="validationDefault01"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            className="form-control"
            id="validationDefault02"
          />
        </div>
        <button onClick={this.login} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
