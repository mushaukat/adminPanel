import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import axios from 'axios';

import { Redirect, Link } from "react-router-dom";


class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostelType: '',
            hostelMobile: '',
            hostelPhone: '',
            hostelDescription: '',
            block_lat: '33.63963',
            block_lang: '73.08411',
            redirect: false,
            Error: false,
            errorMsg: '',
            selectedOption: '',

        };
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount(){
     
        document.getElementById("b1").className+= "active";
        document.getElementById("back-btn").style.display = "none";


        const userData = JSON.parse(localStorage.getItem('userData'));
     
        const data = {
            block_id: userData.block_id,
            hostel_id: userData.hostel_id,
        };
        
        axios.post('/getBlockGeneralInfo',data)
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
            const data=response.data.Data[0]
            console.log(data)

            this.setState({
            selectedOption: data.block_type,
            hostelMobile: data.block_mobile,
            hostelPhone: data.block_phone,
            hostelDescription: data.block_about,
            // block_lat: '33.63963',
            // block_lang: '73.08411',
            })
            
            if(this.state.selectedOption ==="Boys")
            document.getElementById("control_01").checked = true;
            else  if(this.state.selectedOption ==="Girls")
            document.getElementById("control_02").checked = true;
    
          }
        })
    }


    errorMsg = () => {
        if (this.state.Error) {
            return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
        }
    }

    validateForm = () => {
        var radios = document.getElementsByName("hostelType");
        var formValid = false;
    
        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }

        return formValid;
    }
    submitData = (e) => {

        // var f=this.validateForm();
        // if (!f){
        //     alert("Please Select Hostel Type")
        //     }else{
        const userData = JSON.parse(localStorage.getItem('userData'));
                const data = {
            block_id: userData.block_id,
            hostel_id: userData.hostel_id,
            block_about: this.state.hostelDescription,
            block_lat: this.state.block_lat,
            block_lang: this.state.block_lang,
            block_mobile: this.state.hostelMobile,
            block_phone: this.state.hostelPhone,
            block_type: this.state.hostelType

        };


        axios.post('/updateBlockGeneralInfo', data)
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
                        // this.setState({
                        //     redirect: true
                        // })

                    }
                })
        
            
    }


    onChange(e) {
        
        this.setState({ [e.target.name]: e.target.value });
        
    }

    render() {

        return (
            <div className="marginauto">

                <div className="margint60  text-paragraph">
                    <label>Hostel Type :</label>
                </div>

                <section>
                    <div>
                        <input type="radio" id="control_01" name="hostelType" value="Boys"   onChange={this.onChange} required />
                        <label className="label1" for="control_01">
                            <h2>Boys</h2>
                        </label>

                    </div>
                    <div>
                        <input type="radio" id="control_02" name="hostelType" value="Girls"   onChange={this.onChange} required />
                        <label className="label1" for="control_02">
                            <h2>Girls</h2>
                        </label>
                    </div>
                </section>
                <div className="row margint20">
                    <div className="col-xs-6 col-md-6">

                        <div className="form-group text-paragraph">
                            <label >Hostel Mobile :</label>
                            <input type="tel" name="hostelMobile" value={this.state.hostelMobile} onChange={this.onChange} placeholder="Hostel Mobile #" className="form-control text-paragraph" required />

                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">

                        <div className="form-group text-paragraph">
                            <label >Hostel Phone :</label>
                            <input type="tel" name="hostelPhone" value={this.state.hostelPhone} onChange={this.onChange} placeholder="Hostel Phone #" className="form-control text-paragraph" />

                        </div>
                    </div>
                </div>


                <div className="form-group text-paragraph">
                    <label >Hostel Desctiption :</label>
                    <textarea className="form-control"  value={this.state.hostelDescription} rows="5" id="comment" name="hostelDescription" onChange={this.onChange} ></textarea>
                </div>


            </div>

        );
    }
}

export default GeneralInfo;