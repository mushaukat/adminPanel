import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
import './login-signup.css'

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      Error: false,
      errorMsg: '',
      redirectURL: ''

    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    // const hostelEmailVarification = JSON.parse(localStorage.getItem('hostelEmailVarification'));
    // console.log("okkk")
    // if (hostelAdmin) {

    //   var status = parseInt(hostelAdmin.status)
    //   console.log(status)

    //   if (status === 0) {
    //     console.log("0")
    //     this.setState({ redirectURL: '/emailVerification' })
    //   }
    //   else if (status === 1) {
    //     console.log("1")
    //     this.setState({ redirectURL: '/profileSetup' })
    //   }
    //   else if (status === 2) {
    //     console.log("2")
    //     this.setState({ redirectURL: '/hostel' })
    //   }

    //   this.setState({ redirect: true })
    // }
    // else if(hostelEmailVarification){
    //   localStorage.clear();
    // }

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

    axios.post('/adminLogin', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
          }
          else {
            console.log(response.data)
            let data = response.data
            console.log(data)

            var status = parseInt(data.status)
            console.log(status)

            if (status === 0) {
              console.log("0")
              localStorage.setItem('hostelEmailVarification', JSON.stringify(data.token))
              this.setState({ redirectURL: '/emailVerification' })
            }
            else if (status === 1) {
              console.log("1")
              localStorage.clear();
              localStorage.setItem('hostelAdmin', JSON.stringify(data.token))
              this.setState({ redirectURL: '/profileSetup' })
            }
            else if (status === 2) {
              console.log("2")
              localStorage.setItem('hostelAdmin', JSON.stringify(data.token))
              this.setState({ redirectURL: '/hostel' })
            }
            else if (status === 3) {
              console.log("2")
              localStorage.setItem('hostelAdmin', JSON.stringify(data.token))
              this.setState({ redirectURL: '/hostel' })
            }

            this.setState({ redirect: true })

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
      return <Redirect to={this.state.redirectURL} />
    }

    return (

      <div style={style1}>
        <div className="limiter" style={style1}>
          <div className="container-login100">
            <center>
              <div className="wrap-login100">
                <form onSubmit={this.submitData}>
                  <div >
                    <span className="login100-form-title">
                      Member Login
                    </span>

                    <div className="" >
                      <span className="input-label"><p>Email: </p> </span>
                      <input className="input100" type="email" name="email" onChange={this.onChange} placeholder="Email" required />
                    </div>

                    <div>
                      <span className="input-label"><p>Password: </p> </span>
                      <input className="input100" type="password" name="password" onChange={this.onChange} placeholder="Password" required />
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

                    <div className="text-center div1">
                      <Link className="txt2" to="/recovery" >
                        Forgot Email / Password?
                      </Link>
                    </div>

                    <div className="text-center div2">
                      <Link className="txt2" to="/signup" style={style2}>
                        <b>Create your Hostel Account</b>
                      </Link>
                    </div>

                  </div>

                </form>

              </div>
            </center>
          </div>
        </div>

      </div>
    );
  }
}

export default LogIn;