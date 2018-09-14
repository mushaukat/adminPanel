import React, { Component } from 'react';
import './hostel-profile.css'
import axios from 'axios';
import $ from 'jquery'
import RoomTypeSetup from '../profile-setup/room-type-setup'
import EditGeneralInfo from './edit-general-info'
import EditFacilities from './edit-facilities'
import EditRoomTypeSetup from './edit-room-type'
import HostelPicturesSetup from './edit-pictures'


class HostelProfile extends Component {
    constructor(props) {
        super(props);
        this.displayRoom = [];
        this.state = {
            blockName: '',
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
            hostelTypeError: '',
            mobileNumberError: '',
            blockFacilities: [],
            blockRooms: [],
            securityFee: '',
            addmissionFee: '',
            dp2: null,
            dp: '',
            pic1: '',
            pic1_id: '',
            pic2: '',
            pic2_id: '',
            pic3: '',
            pic3_id: '',
            pic4: '',
            pic4_id: '',
            count: '',
            image: '',
            address: '',
            file: '',
            popupCondition: '',

        };
        //  this.onChange = this.onChange.bind(this);
        this.child = React.createRef();
    }


    componentDidMount() {
        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));

        const data = {
            block_id: hostelAdmin.block_id,
            hostel_id: hostelAdmin.hostel_id,
        };

        //this.setState({ blockName: hostelAdmin.hostel_name })

        axios.post('/getBlockGeneralInfo', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);
                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message + " Try Again",
                        })
                    } else {
                        var data = response.data.Data[0]
                        this.setState({
                            blockName: hostelAdmin.hostel_name,
                            hostelType: data.block_type,
                            hostelMobile: data.block_mobile,
                            hostelPhone: data.block_phone,
                            hostelDescription: data.block_about,
                            // block_lat: '33.63963',
                            // block_lang: '73.08411',
                        })


                    }
                })


        axios.post('/getBlockFacilities', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);

                    }
                    else {
                        console.log(response.data.Data)
                        this.setState({ blockFacilities: response.data.Data })
                        console.log(this.state.blockFacilities)


                    }
                })


        axios.post('/getHostelRoomTypes', data)
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
                        const data = response.data.Data
                        this.setState({ blockRooms: data });
                        console.log("a ")
                        console.log(data)

                        this.state.blockRooms.map((data, index) => {

                            this.displayRoom.push(
                                <tr id={index}>
                                    <td class="one">{data.seaters}</td>
                                    <td class="two">{data.base_price}</td>
                                    <td class="three">{data.price_with_mess}</td>

                                </tr>
                            );
                            this.setState({
                                showRoom: this.displayRoom,
                                setRoom: false
                            });

                        })

                    }
                })


        axios.post('/getBlockFees', data)
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
                        const data = response.data.Data[0]
                        this.setState({
                            addmissionFee: data.admission_fee,
                            securityFee: data.security_fee,
                        })
                        console.log(data)
                    }
                })


        var dp = 'http://www.hostinn.pk:3300/api/blockProfileImage/' + data.block_id + '/' + data.hostel_id

        axios.get('/getAllGeneralImages/' + data.block_id + '/' + data.hostel_id)
            .then(
                response => {

                    this.setState({
                        dp: dp
                    })
                    console.log(response.data)
                    this.setState({})

                    for (var i = 0; i < response.data.Data.length; i++) {
                        var obj = response.data.Data[i];

                        if (i == 0) {
                            console.log("enter")
                            this.setState({ pic1_id: obj.image_id })
                            if (obj.image != null) {
                                console.log("enter")
                                this.setState({
                                    pic1: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: true
                                })
                            }
                        } else if (i == 1) {
                            this.setState({ pic2_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic2: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                })
                            }
                        } else if (i == 2) {
                            this.setState({ pic3_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic3: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                })

                            }
                        } else if (i == 3) {
                            this.setState({ pic4_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic4: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                })
                            }
                        }
                    }

                });

    }

    editGeneralInfo = (e) => {
        return (
            <div>
                <div id="popupForm">

                    <h1>Keep in touch!</h1>
                    <small>I'll get back to you as quickly as possible</small>

                    <form action="#">
                        <input placeholder="Name" type="text" required />
                        <input placeholder="Email" type="email" required />
                        <input placeholder="Subject" type="text" required />
                        <textarea placeholder="Comment"></textarea>
                        <input class="formBtn" type="submit" />
                        <input class="formBtn" type="reset" />
                    </form>
                </div>
            </div>
        )
    }


    onClick = () => {
        var complete = this.child.current.submitData();
        this.componentDidMount()
        if (complete === true) {
            var container = $("#popupForm");
            container.fadeOut();
        }
    };


    popupForm = (condition) => {
        this.setState({ popupCondition: condition })
        $('#popupForm').fadeToggle();
    }

    closePopup() {
        var container = $("#popupForm");
        container.fadeOut();
    }

    displayPopup() {
        if (this.state.popupCondition === "generalInfo") {
            return <EditGeneralInfo ref={this.child} />
        }
        else if (this.state.popupCondition === "facilities") {
            return <EditFacilities ref={this.child} />
        }
        else if (this.state.popupCondition === "charges") {
            return <EditRoomTypeSetup ref={this.child} />
        }
        else if (this.state.popupCondition === "pictures") {
            return <HostelPicturesSetup ref={this.child} />
        }
    }

    render() {


        const showBlockFacilities = this.state.blockFacilities.map((facility, index) => {
            return (
                <div key={index}>
                    <div className="col-md-6">
                        <p>{facility.facility_name}</p>
                    </div>
                </div>
            )
        })

        let imagePreviewUrlDp = this.state.dp;
        let $imagePreviewDp = null;
        if (imagePreviewUrlDp != null) {
            $imagePreviewDp = (<img src={imagePreviewUrlDp} />);
        }

        let imagePreviewUrl1 = this.state.pic1;
        let $imagePreview1 = '';
        if (imagePreviewUrl1 != '') {
            $imagePreview1 = (<img src={imagePreviewUrl1} />);
        }

        let imagePreviewUrl2 = this.state.pic2;
        let $imagePreview2 = '';
        if (imagePreviewUrl2 != '') {
            $imagePreview2 = (<img src={imagePreviewUrl2} />);
        }

        let imagePreviewUrl3 = this.state.pic3;
        let $imagePreview3 = '';
        if (imagePreviewUrl3 != '') {
            $imagePreview3 = (<img src={imagePreviewUrl3} />);
        }

        let imagePreviewUrl4 = this.state.pic4;
        let $imagePreview4 = '';
        if (imagePreviewUrl4 != '') {
            $imagePreview4 = (<img src={imagePreviewUrl4} />);
        }


        return (
            <div className="" >


                <div id="hostel-info">
                    <p className="heading md-col-12" >Hostel Information</p>
                    <div id="popup" onClick={() => this.popupForm("generalInfo")}>Edit</div>

                    {/* <button className="btn-edit " id="popup" onClick={this.editGeneralInfo}>Edit</button> */}
                    <br />
                    <div className="col-md-6">
                        <p><b>Block Name: </b></p>
                        <p>{this.state.blockName}</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Hostel Type: </b></p>
                        <p>{this.state.hostelType}</p>
                    </div>
                    <br /><br />
                    <div className="col-md-6">
                        <p><b>Mobile Number: </b></p>
                        <p>{this.state.hostelMobile}</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Phone Number: </b></p>
                        <p>{this.state.hostelPhone}</p>
                    </div>
                    <br /><br />
                    <div className="col-md-12">
                        <p><b>About Hostel: </b></p>
                        <p>{this.state.hostelDescription}</p>
                    </div>

                </div>
                <br /><br /><br />

                <div className="info-block" id="hostel-info">
                    <p className="heading md-col-12" >Hostel Facilities</p>
                    <div id="popup" onClick={() => this.popupForm("facilities")}>Edit</div>
                    <br />
                    {showBlockFacilities}
                </div>
                <br /><br /><br />

                <div className="info-block" id="hostel-info">
                    <p className="heading md-col-12" >Room Charges</p>
                    <div id="popup" onClick={() => this.popupForm("charges")}>Edit</div>
                    <br />
                    <div className="col-md-6">
                        <p><b>Addmission Fee: </b></p>
                        <p>{this.state.addmissionFee}</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Secuerity Fee: </b></p>
                        <p>{this.state.securityFee}</p>
                    </div>
                    <br /><br />
                    <br />

                    <table id="myTable" className="table table-bordered">
                        <thead >
                            <tr>
                                <th >Room Type</th>
                                <th >Price Without Mess</th>
                                <th >Price With Mess</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.displayRoom}
                        </tbody>
                    </table>
                </div>
                <br /><br /><br />

                <div className="info-block" id="hostel-info">
                    <p className="heading md-col-12" >Hostel Pictures</p>
                    <div id="popup" onClick={() => this.popupForm("pictures")}>Edit</div>
                    <br />
                    <div className="marginauto ">
                        <h3>Hostel Profile Picture:</h3>

                        <div className="previewComponent">
                            <div className="imgPreview">
                                {$imagePreviewDp}
                            </div>
                        </div>
                        <br />
                        <br /><br />

                        <h3>Hostel Pictures:</h3>

                        <div className=" col-md-2">
                            <div className="previewComponent">
                                <div className="imgPreview">
                                    {$imagePreview1}
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className=" col-md-2">
                            <div className="previewComponent">
                                <div className="imgPreview">
                                    {$imagePreview2}
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className=" col-md-2">
                            <div className="previewComponent">
                                <div className="imgPreview">
                                    {$imagePreview3}
                                </div>
                            </div>
                            <br />
                        </div>

                        <div className=" col-md-2">
                            <div className="previewComponent">
                                <div className="imgPreview">
                                    {$imagePreview4}
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br /><br /><br />



                <div id="popupForm" >
                    <p className="close" onClick={this.closePopup}>X</p>
                    <div id="scroll">
                        {this.displayPopup()}
                    </div>
                    <div className="container-login100-form-btn">
                        <input type="button" onClick={this.onClick} value="Save" className="login100-form-btn " />
                    </div>
                </div>

            </div>
        );
    }
}

export default HostelProfile;
