import React, { Component } from 'react';
import '../stylesheets/breadcrumb.css';
import '../stylesheets/profile-setup.css'
import GeneralInfo from './general-info'
import Facilities from './facilities'
import RoomTypeSetup from './room-type-setup'
import HostelPicturesSetup from './pictures'

class ProfileSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalInfo: true,
            facilities: false,
            roomTypes: false,
            pictures: false,
            screenNumber: 1,

        };
        this.setNextScreen=this.setNextScreen.bind(this)
        this.setBackScreen=this.setBackScreen.bind(this)
        this.child = React.createRef();
    }


    showSetupScreen() {
        if (this.state.screenNumber===1) {
            return <GeneralInfo ref={this.child} />
        }
        if (this.state.screenNumber===2) {
            return <Facilities ref={this.child}/>
        }
        if (this.state.screenNumber===3) {
            return <RoomTypeSetup ref={this.child}/>
        }
        if (this.state.screenNumber===4) {
            return <HostelPicturesSetup ref={this.child}/>
        }
        if (this.state.screenNumber===4) {
            return 
        }
    }

    onClick = () => {
        var complete= this.child.current.submitData();
        console.log("comp "+complete)
        if(complete===true){
            this.setNextScreen();
        }
      };
    setNextScreen(){
        console.log(this.state.screenNumber)
        this.setState({screenNumber: this.state.screenNumber+1 })
    }

    setBackScreen(){
        console.log(this.state.screenNumber)
        this.setState({screenNumber: this.state.screenNumber-1 })
    }

    render() {

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-setup">
                        <div className="marginauto">
                            <div class="breadcrumb flat">
                                <a id="b1">General Information</a>
                                <a id="b2" >Facilities</a>
                                <a id="b3">Charges Details</a>
                                <a id="b4">Hostel Pictures</a>
                            </div>
                           
                            <div className="wrap-div">
                                <form onSubmit={this.submitData} id="form1">

                                    {this.showSetupScreen()}

                                    <div className="container-login100-form-btn">
                                        <input type="button" id="back-btn" onClick={this.setBackScreen} value="Back" className="login100-form-btn " />
                                    </div>

                                    <div className="container-login100-form-btn">
                                        <input type="button" onClick={this.onClick} value="Next Step" className="login100-form-btn " />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileSetup;