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
            setRoom: true,
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
                        var room = this.state.addedRoom;
                        room.push(parseInt(this.state.seaters));
                        this.setState({ addedRoom: room })
                        console.log(this.state.addedRoom)
                        this.appendRoom();
                        
                        this.setState({ setRoom: true });
                        document.getElementById('myTable').style.display = 'block';
                    }
                })
    }


    appendRoom() {
        this.displayRoom.push(
            <tr >
                <td >{this.state.seaters}</td>
                <td >{this.state.priceWithOutMess}</td>
                <td >{this.state.priceWithMess}</td>
                <td ><center><input class="alignCenter"type="image" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI4IDI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0wLDI0bDQsNGwxMC0xMGwxMCwxMGw0LTRMMTgsMTRMMjgsNGwtNC00TDE0LDEwTDQsMEwwLDRsMTAsMTBMMCwyNHoiIGZpbGw9IiNEODAwMjciLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                </center></td>
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
                 <div class="row">
                <div class="col-xs-5 col-md-5">
                <select name="seaters" className="text-paragraph cselect " onChange={this.onChangeRoomPrice} >
                        {this.getOptions()}
                    </select>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="number" name="priceWithMess" onChange={this.onChangeRoomPrice} placeholder="Charges With Mess"  className="form-control text-paragraph" />
                   
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="number" name="priceWithOutMess" onChange={this.onChangeRoomPrice} placeholder="Charges With Out Mess"  className="form-control text-paragraph"  />
                </div>
    
                <div class="col-xs-1 col-md-1">
                    <center><input class="alignCenter"type="image" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMC4wMjEgMTAwLjAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwLjAyMSAxMDAuMDIxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPHBhdGggZD0iTTUxLjQ0OSwwLjAyMUMyMy44NDUtMC43NzMsMC44MjUsMjAuOTYsMC4wMzIsNDguNTYzYy0wLjAxNCwwLjQ4Ni0wLjAyMSwwLjk3Mi0wLjAyMSwxLjQ1OCAgIGMwLDI3LjYxNCwyMi4zODYsNTAsNTAsNTBzNTAtMjIuMzg2LDUwLTUwQzEwMC4wMjMsMjIuOTU5LDc4LjQ5OSwwLjc5OSw1MS40NDksMC4wMjF6IE03OC4wMTEsNTcuMDIxaC0yMXYyMWgtMTR2LTIxaC0yMXYtMTRoMjEgICB2LTIxaDE0djIxaDIxVjU3LjAyMXoiIGZpbGw9IiM1N2I4NDYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" onClick={this.saveRoom} />
                </center>
                </div>
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
                    <div className="wrap-signup">

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

                            <div className="form-group text-paragraph">
                                <div>
                                    <label>Add Room Types</label>
                                </div>
            
            
                                {this.addRoom()}
                                <br />
                                <table id="myTable" className="table table-bordered col-md-12">
                                    <thead >
                                        <tr>
                                            <th width="28%">Room Type</th>
                                            <th width="20%">Price Without Mess</th>
                                            <th width="20%">Price With Mess</th>
                                            <th width="20%">Remove Room</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.displayRoom}
                                    </tbody>
                                </table>

                            </div>



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