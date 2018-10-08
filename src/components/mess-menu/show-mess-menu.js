import React, { Component } from 'react';
//import '../stylesheets/hostel-profile.css'
//import '../stylesheets/mess-menu.css'
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import '../stylesheets/spinner.css'

class ShowMessMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messData: [],
            scheduleId: '',
            mondayB: '', mondayL: '', mondayD: '',
            tuesdayB: '', tuesdayL: '', tuesdayD: '',
            wednessdayB: '', wednessdayL: '', wednessdayD: '',
            thursdayB: '', thursdayL: '', thursdayD: '',
            fridayB: '', fridayL: '', fridayD: '',
            saturdayB: '', saturdayL: '', saturdayD: '',
            sundayB: '', sundayL: '', sundayD: '',
            breakfastTime: '', lunchTime: '', dinnerTime: '',
            fridayLunchTime: '', sundayBrunchTime: '', sundayDinnerTime: '',
            breakfastTime1: '', lunchTime1: '', dinnerTime1: '',
            fridayLunchTime1: '', sundayBrunchTime1: '', sundayDinnerTime1: '',
            breakfastTime2: '', lunchTime2: '', dinnerTime2: '',
            fridayLunchTime2: '', sundayBrunchTime2: '', sundayDinnerTime2: '',
            messNote: '',
            hostelName: '',
            editMenu: false,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        document.getElementById("show").style.display = "block";
        document.getElementById("update").style.display = "none";

        const token = JSON.parse(localStorage.getItem('hostelAdmin'));
        console.log(token);
        const data = {
            token: token,
        }
        console.log("ok")
        axios.post('/getMessSchedule', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);
                        if(response.data.expired){
                            this.setState({ redirect: true })
                        }
                        else{
                            this.setState({
                                Error: true,
                                errorMsg: response.data.Message + " Try Again",
                            })
                        }
                        
                    } else {
                        const data = response.data.Data
                        console.log(response.data)
                        var split1=response.data.weekdays_breakfast_time.split(" - ");
                        var split2=response.data.weekdays_lunch_time.split(" - ");
                        var split3=response.data.weekdays_dinner_time.split(" - ");
                        var split4=response.data.weekend_breakfast_time.split(" - ");
                        var split5=response.data.weekend_lunch_time.split(" - ");
                        var split6=response.data.weekend_dinner_time.split(" - ");

                        this.setState({
                            scheduleId: response.data.schedule_id,
                            breakfastTime: response.data.weekdays_breakfast_time,
                            lunchTime: response.data.weekdays_lunch_time,
                            dinnerTime: response.data.weekdays_dinner_time,
                            fridayLunchTime: response.data.weekend_lunch_time,
                            sundayBrunchTime: response.data.weekend_breakfast_time,
                            sundayDinnerTime: response.data.weekend_dinner_time,
                            breakfastTime1: split1[0],
                            breakfastTime2: split1[1],
                            lunchTime1: split2[0],
                            lunchTime2: split2[1],
                            dinnerTime1: split3[0],
                            dinnerTime2: split3[1],
                            fridayLunchTime1: split4[0],
                            fridayLunchTime2: split4[1],
                            sundayBrunchTime1: split5[0],
                            sundayBrunchTime2: split5[1],
                            sundayDinnerTime1: split6[0],
                            sundayDinnerTime2: split6[1],
                            messData: response.data.Data,
                            mondayB: data[0].breakfast, mondayL: data[0].lunch, mondayD: data[0].dinner,
                            tuesdayB: data[1].breakfast, tuesdayL: data[1].lunch, tuesdayD: data[1].dinner,
                            wednessdayB: data[2].breakfast, wednessdayL: data[2].lunch, wednessdayD: data[2].dinner,
                            thursdayB: data[3].breakfast, thursdayL: data[3].lunch, thursdayD: data[3].dinner,
                            fridayB: data[4].breakfast, fridayL: data[4].lunch, fridayD: data[4].dinner,
                            saturdayB: data[5].breakfast, saturdayL: data[5].lunch, saturdayD: data[5].dinner,
                            sundayB: data[6].breakfast, sundayL: data[6].lunch, sundayD: data[6].dinner,
                        })
                        console.log(this.state)
                        console.log(this.state.messData[1].mess_day_schedule_id)
                    }
                })
    }

    submitData = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('hostelAdmin'));
        console.log(token);

        var breakfastTime = this.state.breakfastTime1 + " - " + this.state.breakfastTime2
        var lunchTime = this.state.lunchTime1 + " - " + this.state.lunchTime2
        var dinnerTime = this.state.dinnerTime1 + " - " + this.state.dinnerTime2
        var fridayLunchTime = this.state.fridayLunchTime1 + " - " + this.state.fridayLunchTime2
        var sundayBrunchTime = this.state.sundayBrunchTime1 + " - " + this.state.sundayBrunchTime2
        var sundayDinnerTime = this.state.sundayDinnerTime1 + " - " + this.state.sundayDinnerTime2

        this.setState({
            breakfastTime: breakfastTime,
            lunchTime: lunchTime,
            dinnerTime: dinnerTime,
            fridayLunchTime: fridayLunchTime,
            sundayBrunchTime: sundayBrunchTime,
            sundayDinnerTime: sundayDinnerTime,
        })

        var array = [
            [this.state.messData[0].mess_day_schedule_id, this.state.mondayB, this.state.mondayL,
            this.state.mondayD, this.state.messData[0].mess_day_id, this.state.messData[0].day],

            [this.state.messData[1].mess_day_schedule_id, this.state.tuesdayB, this.state.tuesdayL,
            this.state.tuesdayD, this.state.messData[1].mess_day_id, this.state.messData[1].day],

            [this.state.messData[2].mess_day_schedule_id, this.state.wednessdayB, this.state.wednessdayL,
            this.state.wednessdayD, this.state.messData[2].mess_day_id, this.state.messData[2].day],

            [this.state.messData[3].mess_day_schedule_id, this.state.thursdayB, this.state.thursdayL,
            this.state.thursdayD, this.state.messData[3].mess_day_id, this.state.messData[3].day],

            [this.state.messData[4].mess_day_schedule_id, this.state.fridayB, this.state.fridayL,
            this.state.fridayD, this.state.messData[4].mess_day_id, this.state.messData[4].day],

            [this.state.messData[5].mess_day_schedule_id, this.state.saturdayB, this.state.saturdayL,
            this.state.saturdayD, this.state.messData[5].mess_day_id, this.state.messData[5].day],

            [this.state.messData[6].mess_day_schedule_id, this.state.sundayB, this.state.sundayL,
            this.state.sundayD, this.state.messData[6].mess_day_id, this.state.messData[6].day],

        ];
        console.log("array ")
        console.log(array)

        const data = {
            token: token,
            schedule_id: this.state.scheduleId,
            weekdays_breakfast_time: breakfastTime,
            weekdays_lunch_time: lunchTime,
            weekdays_dinner_time: dinnerTime,
            weekend_breakfast_time: sundayBrunchTime,
            weekend_lunch_time: fridayLunchTime,
            weekend_dinner_time: sundayDinnerTime,
            Data: array

        }
        console.log("data " + data)

        axios.post('/updateMess', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);
                        if(response.data.expired){
                            this.setState({ redirect: true })
                        }
                        else {
                            this.setState({
                                Error: true,
                                errorMsg: response.data.Message + " Try Again",
                            })
                            return false
                        }

                        
                    } else {
                        const data = response.data
                        console.log(data)
                        this.setState({ submitProfileRedirect: true })
                        return true
                    }
                })
    }

    updateMenu = (e) => {

        if (this.state.editMenu === false) {
            document.getElementById("show").style.display = "none";
            document.getElementById("update").style.display = "block";
            document.getElementById("update-menu").innerHTML = "Save Menu";
            this.setState({ editMenu: true })

        }
        else if (this.state.editMenu === true) {
            var submit = this.submitData(e)
            if (submit) {
                document.getElementById("show").style.display = "block";
                document.getElementById("update").style.display = "none";
                document.getElementById("update-menu").innerHTML = "Edit Menu";
                this.setState({ editMenu: false })
            }

        }

    }

    showMess() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Dinner</th>
                    </tr>
                    <tr>
                        <td><b>Monday</b></td>
                        <td >{this.state.mondayB} </td>
                        <td >{this.state.mondayL} </td>
                        <td >{this.state.mondayD} </td>
                    </tr>
                    <tr>
                        <td><b>Tuesday</b></td>
                        <td >{this.state.tuesdayB} </td>
                        <td >{this.state.tuesdayL} </td>
                        <td >{this.state.tuesdayD} </td>
                    </tr>
                    <tr>
                        <td><b>Wednessday</b></td>
                        <td >{this.state.wednessdayB} </td>
                        <td >{this.state.wednessdayL} </td>
                        <td >{this.state.wednessdayD} </td>
                    </tr>
                    <tr>
                        <td><b>Thursday</b></td>
                        <td >{this.state.thursdayB} </td>
                        <td >{this.state.thursdayL} </td>
                        <td >{this.state.thursdayD} </td>
                    </tr>
                    <tr>
                        <td><b>Friday</b></td>
                        <td >{this.state.fridayB} </td>
                        <td >{this.state.fridayL} </td>
                        <td >{this.state.fridayD} </td>
                    </tr>
                    <tr>
                        <td><b>Saturday</b></td>
                        <td >{this.state.saturdayB} </td>
                        <td >{this.state.saturdayL} </td>
                        <td >{this.state.saturdayD} </td>
                    </tr>
                    <tr>
                        <td><b>Sunday</b></td>
                        <td >{this.state.sundayB} </td>
                        <td >{this.state.sundayL} </td>
                        <td >{this.state.saturdayD} </td>
                    </tr>
                </table>
                <br />

                <div>
                    <span className="col-md-12">Mess Timmings </span>
                    <div className="col-md-12">
                        <span className="col-md-4">Breakfask: {this.state.breakfastTime} </span>
                        <span className="col-md-4">Lunch: {this.state.lunchTime} </span>
                        <span className="col-md-4">Dinner: {this.state.dinnerTime} </span>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <span className="col-md-4">Friday Lunch: {this.state.fridayLunchTime} </span>
                        <span className="col-md-4">Sunday Breakfask/Brunch: {this.state.sundayBrunchTime} </span>
                        <span className="col-md-4">Sunday Dinner: {this.state.sundayDinnerTime} </span>
                    </div>

                </div>
                <br />
                <br />
                <label>Mess Note: </label>
                <p className="form-control" rows="5">{this.state.messNote} </p>



            </div>

        )
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    updateMess() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Dinner</th>
                    </tr>
                    <tr>
                        <td><b>Monday</b></td>
                        <td ><input type="text" name="mondayB" value={this.state.mondayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="mondayL" value={this.state.mondayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="mondayD" value={this.state.mondayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Tuesday</b></td>
                        <td ><input type="text" name="tuesdayB" value={this.state.tuesdayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="tuesdayL" value={this.state.tuesdayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="tuesdayD" value={this.state.tuesdayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Wednessday</b></td>
                        <td ><input type="text" name="wednessdayB" value={this.state.wednessdayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="wednessdayL" value={this.state.wednessdayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="wednessdayD" value={this.state.wednessdayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Thursday</b></td>
                        <td ><input type="text" name="thursdayB" value={this.state.thursdayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="thursdayL" value={this.state.thursdayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="thursdayD" value={this.state.thursdayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Friday</b></td>
                        <td ><input type="text" name="fridayB" value={this.state.fridayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="fridayL" value={this.state.fridayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="fridayD" value={this.state.fridayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Saturday</b></td>
                        <td ><input type="text" name="saturdayB" value={this.state.saturdayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="saturdayL" value={this.state.saturdayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="saturdayD" value={this.state.saturdayD} onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td><b>Sunday</b></td>
                        <td ><input type="text" name="sundayB" value={this.state.sundayB} onChange={this.onChange} /></td>
                        <td ><input type="text" name="sundayL" value={this.state.sundayL} onChange={this.onChange} /></td>
                        <td ><input type="text" name="sundayD" value={this.state.sundayD} onChange={this.onChange} /></td>
                    </tr>
                </table>
                <br />

                <div>
                    <span className="col-md-12">Mess Timmings </span>
                    <div className="col-md-12">
                        <span className="col-md-4">Breakfask: <input type="time" name="breakfastTime1" value={this.state.breakfastTime1} onChange={this.onChange} /> - <input type="time" name="breakfastTime2" value={this.state.breakfastTime2} onChange={this.onChange} /> </span>
                        <span className="col-md-4">Lunch: <input type="time" name="lunchTime1" value={this.state.lunchTime1} onChange={this.onChange} /> - <input type="time" name="lunchTime2" value={this.state.lunchTime2} onChange={this.onChange} /></span>
                        <span className="col-md-4">Dinner: <input type="time" name="dinnerTime1" value={this.state.dinnerTime1} onChange={this.onChange} /> - <input type="time" name="dinnerTime2" value={this.state.dinnerTime2} onChange={this.onChange} /></span>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <span className="col-md-4">Friday Lunch: <input type="time" name="fridayLunchTime1" value={this.state.fridayLunchTime1} onChange={this.onChange} /> - <input type="time" name="fridayLunchTime2" value={this.state.fridayLunchTime2} onChange={this.onChange} /> </span>
                        <span className="col-md-4">Sunday Breakfask/Brunch: <input type="time" name="sundayBrunchTime1" value={this.state.sundayBrunchTime1} onChange={this.onChange} /> - <input type="time" name="sundayBrunchTime2" value={this.state.sundayBrunchTime2} onChange={this.onChange} /></span>
                        <span className="col-md-4">Sunday Dinner:<input type="time" name="sundayDinnerTime1" value={this.state.sundayDinnerTime1} onChange={this.onChange} /> - <input type="time" name="sundayDinnerTime2" value={this.state.sundayDinnerTime2} onChange={this.onChange} /></span>
                    </div>

                </div>
                <br />
                <br />
                <label>Mess Note: </label>
                <input className="form-control" rows="5" type="text" name="messNote" value={this.state.messNote} onChange={this.onChange} />



            </div>

        )
    }



    render() {
        loadProgressBar()

        return (
            <div>
                <div className="info-block" id="login-info">
                    <p className="heading">Mess Menu</p>

                    <br />
                    <button id="update-menu" onClick={this.updateMenu}>Edit Menu</button>
                    <br />
                    <div id="show">
                        {this.showMess()}
                    </div>
                    <div id="update">
                        {this.updateMess()}
                    </div>



                </div>
            </div>
        );
    }
}

export default ShowMessMenu;
