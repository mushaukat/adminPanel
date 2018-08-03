import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import axios from 'axios';
import { Redirect } from "react-router-dom";


class Facilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      selected_facilities: [],
      redirect: false,
      Error: false,
      errorMsg: '',

    };
    this.onChange = this.onChange.bind(this);

  }


  errorMsg = () => {
    if (this.state.Error) {
      return <b> <br /><p className="error-message"> {this.state.errorMsg}  </p> </b>
    }
  }


  componentDidMount() {

    axios.post('/getFacilities')
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);

            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
          } else {
            console.log(response.data.Data);
            this.setState({ facilities: response.data.Data, })
            console.log(this.state.facilities[0].facility_name)
          }
        })
  }


  submitData = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const data = {
        block_id: userData.block_id,
        hostel_id: userData.hostel_id,
        hostel_facilities: this.state.selected_facilities,

    };


    console.log(data);
    axios.post('/insertBlockFacilities', data)
        .then(

            response => {
                if (response.data.Error) {
                    console.log(response.data);
                    console.log(response.data.Error);

                    this.setState({
                        Error: true,
                        errorMsg: response.data.Message
                    })

                } else {
                    console.log(response.data);
                    console.log(response.data.Error);
                    this.setState({
                        redirect: true
                    })

                }
            })


}



  onChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = parseInt(target.name);
    if (target.checked) {
      this.setState({
        selected_facilities: [...this.state.selected_facilities, name]
      });
    }
    else {
      var array = this.state.selected_facilities
      var index = array.indexOf(name);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.setState({
        selected_facilities: array
      });
    }

    console.log(this.state.selected_facilities)
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const facilities = this.state.facilities.map((facility, index) => {

      return (
        <div key={index}>
          <div className="checkbox  text-paragraph">
            <label><input type="checkbox" name={facility.facility_id} onChange={this.onChange}></input>{facility.facility_name}</label>
          </div>
        </div>
      )
    }

    );



    return (
      <div className="limiter" >
        <div className="container-login100">
          <div className="wrap-login100">


            <form className="marginauto " onSubmit={this.submitData}>
              <h1 className="">
                Step 2 of 4: Facilities
                    </h1>
              <h3 className="margint60">Tick Faclities which are available in Hostels</h3>
              {facilities}

              {/* <div className="checkbox  text-paragraph">
                          <label><input type="checkbox" value=""></input>Internet</label>
                        </div>
                        <div className="checkbox text-paragraph">
                          <label><input type="checkbox" value=""></input>Mess</label>
                        </div> */}

              {/* <div class="form-group text-paragraph">
                      <label for="sel1">Select Package:</label>
                      <select class="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        
                      </select>
                    </div>
                             */}
              <div>
                {this.errorMsg()}
              </div>

              <div className="container-login100-form-btn">
                <input type="submit" value="Next Step" className="login100-form-btn" />
              </div>


              {/* <div className="container-login100-form-btn">
                <Link className="txt2" to="/roomtype" >
                  <button className="login100-form-btn" value="submit" type="submit" >
                    Next
                        </button></Link>
              </div> */}


            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Facilities;