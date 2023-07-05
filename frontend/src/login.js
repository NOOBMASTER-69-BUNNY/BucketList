import React from 'react';
import './login.css';
import './404_page.css'
import axios from 'axios';

class LoginForm extends React.Component {
  handleSignUp = async (event) => {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');

    const formElement = document.getElementById('signup-form');
    const formData = new FormData(formElement);
    const username = formData.get("username");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try{
      const response = await axios.post('http://127.0.0.1:8000/signup/', {
        username,
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');

    const formElement = document.getElementById('signin-form');
    const formData = new FormData(formElement);
    const email = formData.get('email');
    const password = formData.get('password');

    try{
      const response = await axios.post('http://127.0.0.1:8000/signin/', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
        <div className="login-form">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form id='signup-form' onSubmit={this.handleSignUp}>
              <h1>Create Account</h1>
              <div className="social-container">
              </div>
              <input type="text" placeholder="Username" name='username'/>
              <input type="text" placeholder="Name" name='name'/>
              <input type="email" placeholder="Email" name='email'/>
              <input type="password" placeholder="Password" name='password'/>
              <button className='button_login' type='submit'>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form id='signin-form' onSubmit={this.handleSignIn}>
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button className='button_login' type='submit'>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome!!!</h1>
                <p>Enter your personal details to start your journey.</p>
                <h2>Already have an account?</h2>
                <button className="ghost" onClick={this.handleSignIn}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details to continue your journey.</p>
                <h2>Don't have an account?</h2>
                <button className="ghost" onClick={this.handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
