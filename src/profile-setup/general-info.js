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
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData);
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


        console.log(data);
        console.log("ok");
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
                        this.setState({
                            redirect: true
                        })

                    }
                })
        console.log("ok");


    }




    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="marginauto">

               
                    <center>
                    <h1>
                       General info
                    </h1>
            </center>

                    <div className="margint60  text-paragraph">
                        <label>Hostel Type :</label>
                        
                        <label className="leftmargin30"><input type="radio" name="hostelType" value="Boys" onChange={this.onChange} required />Boys</label>
                        <label className="leftmargin30"><input type="radio" name="hostelType" value="Girls" onChange={this.onChange} />Girls</label>
                    </div>

                    <div className="row margint20">
                        <div className="col-xs-6 col-md-6">

                            <div className="form-group text-paragraph">
                                <label >Hostel Mobile :</label>
                                <input type="tel" name="hostelMobile" onChange={this.onChange} placeholder="Hostel Mobile #" className="form-control text-paragraph" />

                            </div>
                        </div>
                        <div className="col-xs-6 col-md-6">

                            <div className="form-group text-paragraph">
                                <label >Hostel Phone :</label>
                                <input type="tel" name="hostelPhone" onChange={this.onChange} placeholder="Hostel Phone #" className="form-control text-paragraph" />

                            </div>
                        </div>
                    </div>


                    {/*<div id="demo"><MapContainer /></div>
                    <div> <Demo /> </div>*/}


                    <div className="form-group text-paragraph">
                        <label >Hostel Desctiption :</label>
                        <textarea className="form-control" rows="5" id="comment" name="hostelDescription" onChange={this.onChange} ></textarea>
                    </div>


                </div>

        );
    }
}

export default GeneralInfo;