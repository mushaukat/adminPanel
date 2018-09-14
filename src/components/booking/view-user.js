import React, { Component } from 'react';
import axios from 'axios';
import './booking.css'

class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],

    };

  }

  componentDidMount() {
    console.log(this.props)
    var userId = this.props.match.params.userId
    console.log(userId)

    const data = {
      user_id: userId
    };

    axios.post('/getUserDetails', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(121)
            console.log(response.data);
            this.setState({ noPendingBookingMsg: response.data.Message, })

          } else {
            console.log(111)
            const data = response.data
            console.log(data)
            this.setState({
              userData: data.Data,
            })
            console.log("ok")
            console.log()

          }
        })

  }


  render() {
    return (
      <div className="">
        <div className="">

          <div className="col-md-12">
            <div className="picture-box">
              {/* <img src="" width="100px" height="100px"/> */}
            </div>
          </div>

          <br /> <br />
          <div >
            <div className="col-md-3">Name:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Father's Name:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Phone Number:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Gender:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Permanent Address:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">CNIC No. / B Form No:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Date of Birth:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">College/University ID No:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Degree Program:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Home/Father's Phone Number:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Seaters:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>
          <div>
            <div className="col-md-3">Mess Included:</div>
            <div className="col-md-9">{this.state.userData.user_name}</div>
          </div>

        </div>

      </div>
    );
  }
}

export default ViewUser;