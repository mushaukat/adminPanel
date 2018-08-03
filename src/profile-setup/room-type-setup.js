import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import axios from 'axios';
import { Redirect } from "react-router-dom";


class RoomTypeSetup extends Component {
    constructor(props) {
        super(props);
        this.displayRoom = [];
        this.state = {
            showRoom: this.displayRoom,
            roomTypes: [{ seaters: 1 }],
            securityFee: '',
            addmissionFee: '',
            addedRoom: [],
            setRoom: false,
            seaters: '',
            priceWithMess: '',
            priceWithOutMess: '',
            append: false,

        };
        this.onChangeRoomPrice = this.onChangeRoomPrice.bind(this);
        this.onChangeBasePrice = this.onChangeBasePrice.bind(this);
        this.saveRoom = this.saveRoom.bind(this);
        this.appendRoom = this.appendRoom.bind(this);

    }


    componentDidMount() {

        axios.post('/getAllRoomTypes')
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);

                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message + " Try Again",
                        })
                    } else {
                        console.log(response.data.Data);
                        this.setState({ roomTypes: response.data.Data, })
                    }
                })
    }


    onChangeRoomPrice(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onChangeBasePrice(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    saveRoom(e) {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            block_id: userData.block_id,
            hostel_id: userData.hostel_id,
            seaters: this.state.seaters,
            base_price: this.state.priceWithOutMess,
            price_with_mess: this.state.priceWithMess
        }

        axios.post('/AddHostelRoomType', data)
            .then(

                response => {
                    if (response.data.Error) {
                        console.log(response.data);

                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message
                        })

                    } else {
                        console.log(response.data);
                        var room = this.state.addedRoom
                        room.push(parseInt(this.state.seaters))
                        this.setState({ addedRoom: room })
                        console.log(this.state.addedRoom)
                        this.appendRoom();
                    }
                })
    }


    appendRoom() {
        this.displayRoom.push(
            <tr >
                <td >{this.state.seaters}</td>
                <td >{this.state.priceWithOutMess}</td>
                <td >{this.state.priceWithMess}</td>
                <td ><button>Remove Room</button></td>
            </tr>
        );
        this.setState({
            showRoom: this.displayRoom,
            setRoom: false
        });
    }


    getOptions() {
        let items = [];
        items.push(<option>Select Number Of Seater</option>)
        this.state.roomTypes.map((item, index) => {
            if (!this.state.addedRoom.includes(item.seaters)) {
                items.push(<option key={index} value={item.seaters}>{item.seaters}</option>);
            }
        });
        return items;
    }


    addRoom = () => {
        if (this.state.setRoom) {
            return (
                <div>
                    <select name="seaters" className="form-control text-paragraph col-md-4" onChange={this.onChangeRoomPrice} >
                        {this.getOptions()}
                    </select>
                    <input className="col-md-3" type="text" name="priceWithMess" onChange={this.onChangeRoomPrice} placeholder="Room Charges With Mess" />
                    <input className="col-md-3" type="text" name="priceWithOutMess" onChange={this.onChangeRoomPrice} placeholder="Room Charges With Out Mess" />
                    <button className="col-md-2" onClick={this.saveRoom}>Save</button>
                </div>
            )
        }
    }


    changeState = () => {
        this.setState({ setRoom: true });
    }


    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">

                        <div className="marginauto ">
                            <h1 className="">
                                Step 3 of 4: Room Type Details
                            </h1>

                            <div className=" form-group margint60 text-paragraph">
                                <label >Hostel Admission Fee:</label>
                                <input type="number" name="addmissionFee" onChange={this.onChangeBasePrice} className="form-control text-paragraph" />
                            </div>
                            <br />

                            <div className="form-group text-paragraph">
                                <label>Security Fee:</label>
                                <input type="number" name="securityFee" onChange={this.onChangeBasePrice} className="form-control text-paragraph" />
                            </div>
                            <br />

                            <table className="form-group text-paragraph">
                                <div>
                                    <label>Select Room Seating:</label>
                                    <input type="button" value="Add" onClick={this.changeState} />
                                </div>
                                <br />
                                <table className="table table-bordered col-md-12">
                                    <thead >
                                        <tr>
                                            <th >Room Type</th>
                                            <th >Price Without Mess</th>
                                            <th >Price With Mess</th>
                                            <th >Remove Room</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.displayRoom}
                                    </tbody>
                                </table>

                                {this.addRoom()}
                            </table>



                            <div className="container-login100-form-btn">
                                <input type="submit" value="Next Step" className="login100-form-btn" />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomTypeSetup;