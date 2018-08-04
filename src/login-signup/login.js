import React, { Component } from 'react';
import '../stylesheets/login-signup.css';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
//import '../stylesheets/index.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      Error: false,
      errorMsg: '',

    };
    this.onChange = this.onChange.bind(this);

  }


  errorMsg = () => {
    if (this.state.Error) {
      return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
    }

  }

  submitData = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.email,
      password: this.state.password
    };

    console.log(data)
    axios.post('/adminLogin', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);

            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
            console.log(this.state.errorMsg);

          } else {
            console.log(response.data);
            console.log(response.data.Error);
            console.log(response.data.Data);
            let data= response.data
            localStorage.setItem('userData', JSON.stringify(data.Data[0]))
            var a=JSON.parse(localStorage.getItem('userData'));
            console.log(a.admin_id);

            this.setState({
              redirect: true
            })

          }
        })

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  render() {
    var style1 = {
      background: '#7386D5'
    }
    var style2 = {
      fontSize: '1.5em'
    }

    if (this.state.redirect) {
      return <Redirect to='/ProfileSetup' />
    }

    return (
      <div style={style1}>
        <div className="limiter" style={style1}>
          <div className="container-login100">
            <div className="wrap-login100">
              <form onSubmit={this.submitData}>
                <div className="login100-form validate-form">
                  <span className="login100-form-title">
                    Member Login
                </span>

                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="email" name="email" onChange={this.onChange} placeholder="Email" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" name="password" onChange={this.onChange} placeholder="Password" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div>
                    <b>{this.errorMsg()}</b>
                  </div>

                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                      Login
                  </button>
                  </div>
                  <br />

                  <div className="text-center p-t-12">
                    <span className="txt1">
                      Forgot
                  </span>
                    <Link className="txt2" to="/recovery" >
                      Email / Password?
                  </Link>
                  </div>

                  <div className="text-center p-t-136">
                    <Link className="txt2" to="/signup" style={style2}>
                      <b>Create your Hostel Account</b>
                      <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </Link>
                  </div>

                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;