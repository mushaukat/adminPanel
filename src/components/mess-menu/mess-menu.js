import React, { Component } from 'react';
//import '../stylesheets/hostel-profile.css'
import './mess-menu.css'
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import '../stylesheets/spinner.css'
import ShowMessMenu from './show-mess-menu';

class MessMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    componentDidMount() {
        
        const token = JSON.parse(localStorage.getItem('hostelAdmin'));
        console.log(token);
        const data = {
            token: token,
        }
        console.log("ok")
        axios.post('/checkMessFacilityStatus', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);
                        if(response.data.expired){
                            this.setState({ redirect: true })
                        }
                        else{
                            this.setState({ 
                                messFacility: false,
                                messFacilityMsg: "You have not selected Mess Facility. If your Hostel Have Mess then Select Mess from Facilities."
                            })
        
                        }
                        
                    }
                    else {
                        console.log("okkkkk " + response.data)
                        console.log(response.data)
                        this.setState({ messFacility: true })
                    }
                })
       
        }



    render() {
        loadProgressBar()

        let showthis

        if(this.state.messFacility){
            showthis = <ShowMessMenu />
        }
        else{
            showthis = this.state.messFacilityMsg
        }

        return (
            <div>
                {showthis}
            </div>
        );
    }
}

export default MessMenu;
