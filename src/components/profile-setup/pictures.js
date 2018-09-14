import React, { Component } from 'react';
import './profile-setup.css'
import './profile-pic.css'
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import '../stylesheets/spinner.css'


class HostelPicturesSetup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dp2: null,
            dp: '',
            pic1: '',
            pic1_id: '',
            remove_pic1:false,
            pic2: '',
            pic2_id: '',
            remove_pic2:false,
            pic3: '',
            pic3_id: '',
            remove_pic3:false,
            pic4: '',
            pic4_id: '',
            remove_pic4:false,
            pic5: '',
            pic5_id: '',
            remove_pic5:false,
            pic6: '',
            pic6_id: '',
            remove_pic6:false,
            count: '',
            image: '',
            address: '',
            file: '',
            profilePicError: true,
            generealPicError: true,
            profilePicErrorMsg: '',
            generealPicErrorMsg: '',
        };
    }

    componentDidMount() {
        document.getElementById("b4").className += " active "
        document.getElementById("back-btn").style.display = "block";

        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
        const data = {
            block_id: hostelAdmin.block_id,
            hostel_id: hostelAdmin.hostel_id,
        };

        axios.post('/isProfilePictureUploaded', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log("ok " + response.data);

                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message + " Try Again",
                        })
                    } else {
                        console.log(response.data);
                        if (response.data.Data.length === 0) {
                            this.setState({ profilePicError: true })
                            console.log(1)
                        }
                        else if(response.data.Data[0].block_image === ""){
                            this.setState({ profilePicError: true })
                            console.log(1.5)
                        }
                        else {
                            var dp = 'http://www.hostinn.pk:3300/api/blockProfileImage/' + data.block_id + '/' + data.hostel_id
                            this.setState({ dp: dp, profilePicError: false })
                            console.log(2)
                        }

                    }
                })

        axios.get('/getAllGeneralImages/' + data.block_id + '/' + data.hostel_id)
            .then(
                response => {

                    for (var i = 0; i < response.data.Data.length; i++) {
                        var obj = response.data.Data[i];

                        if (i == 0) {
                            this.setState({ pic1_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic1: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic1:true,
                                })
                            }
                        } else if (i == 1) {
                            this.setState({ pic2_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic2: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic2:true,
                                })
                            }
                        } else if (i == 2) {
                            this.setState({ pic3_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic3: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic3:true,
                                })

                            }
                        } else if (i == 3) {
                            this.setState({ pic4_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic4: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic4:true,
                                })
                            }
                        } else if (i == 4) {
                            this.setState({ pic5_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic5: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic5:true,
                                })
                            }
                        } else if (i == 5) {
                            this.setState({ pic6_id: obj.image_id })
                            if (obj.image != null) {
                                this.setState({
                                    pic6: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                                    generealPicError: false,
                                    remove_pic6:true,
                                })
                            }
                        }
                    }

                });

    }

    errorMsg = () => {
        if (this.state.Error) {
            return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
        }

    }

    submitPicture = (e, url, image_id) => {
        e.preventDefault();
        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));

        var formData = new FormData();
        formData.append("image", this.state.file);
        formData.append("block_id", hostelAdmin.block_id);
        formData.append("hostel_id", hostelAdmin.hostel_id);

        if (url == 0) {
            this.setState({ address: '/uploadBlockProfileImage' })
            console.log("11")
        }
        else {
            formData.append("image_id", image_id);
            this.setState({ address: '/uploadBlockGeneralImage' })
            console.log("22")
        }

        axios.post(this.state.address, formData, { headers: {} })
            .then(

                response => {
                    if (response.data.Error) {
                        console.log(response.data);

                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message
                        })

                    }
                    else {
                        console.log("33")
                        console.log(response.data)
                        if (url == 0) {
                            this.setState({
                                dp: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                profilePicError: false,
                            })

                        } else if (url == 1) {
                            this.setState({
                                pic1: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic1:true,
                            })

                        } else if (url == 2) {
                            this.setState({
                                pic2: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic2:true,
                            })

                        } else if (url == 3) {
                            this.setState({
                                pic3: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic3:true,
                            })

                        } else if (url == 4) {
                            this.setState({
                                pic4: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic4:true,
                            })

                        } else if (url == 5) {
                            this.setState({
                                pic5: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic5:true,
                            })

                        } else if (url == 6) {
                            this.setState({
                                pic6: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + hostelAdmin.block_id + "/" + hostelAdmin.hostel_id,
                                generealPicError: false,
                                remove_pic6:true,
                            })

                        }

                        this.setState({
                            redirect: true
                        })

                    }
                }).catch(function (error) {
                    console.log(error.response);
                });

    }

    ImageChange(e, count, image_id) {
        e.preventDefault();
        this.setState({ count: count, });

        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({ file: file, });

        reader.onloadend = () => {

            if (count == 0) {
                const pic = { file: file, imagePreviewUrlDp: reader.result }
                this.setState({ dp: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 1) {
                const pic = { file: file, imagePreviewUrl1: reader.result }
                this.setState({ pic1: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 2) {
                const pic = { file: file, imagePreviewUrl2: reader.result }
                this.setState({ pic2: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 3) {
                const pic = { file: file, imagePreviewUrl3: reader.result }
                this.setState({ pic3: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 4) {
                const pic = { file: file, imagePreviewUrl4: reader.result }
                this.setState({ pic4: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 5) {
                const pic = { file: file, imagePreviewUrl5: reader.result }
                this.setState({ pic5: pic, });
                this.submitPicture(e, count, image_id)
            }
            else if (count == 6) {
                const pic = { file: file, imagePreviewUrl6: reader.result }
                this.setState({ pic6: pic, });
                this.submitPicture(e, count, image_id)
            }

        }

        reader.readAsDataURL(file)
    }

    submitData = () => {
        if (this.state.profilePicError) {
            this.setState({ profilePicErrorMsg: "Please upload Hostel Profile Picture" })
            return false
        }
        else {
            this.setState({ profilePicErrorMsg: "", })
        }
        if (this.state.generealPicError) {
            this.setState({ generealPicErrorMsg: "Please upload Atleast 1 Hostel Picture" })
            return false
        }
        else {
            this.setState({ generealPicErrorMsg: "", })
        }

        return true
    }

    removeImage(e,count,image_id){
        e.preventDefault();
        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
        var data={
            block_id: hostelAdmin.block_id,
            hostel_id: hostelAdmin.hostel_id,
            image_id: image_id
        }
        
        axios.post('/deleteGeneralImage', data)
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
              if(count===1){
                  this.setState({remove_pic1:false, pic1:''})
              }
              else if (count===2){
                this.setState({remove_pic2:false, pic2:''})
              }
              else if (count===3){
                this.setState({remove_pic3:false, pic3:''})
              }
              else if (count===4){
                this.setState({remove_pic4:false, pic4:''})
              }
              else if (count===5){
                this.setState({remove_pic5:false, pic5:''})
              }
              else if (count===6){
                this.setState({remove_pic6:false, pic6:''})
              }
            }
          })


    }

    render() {
        loadProgressBar()

        let imagePreviewUrlDp = this.state.dp;
        let $imagePreviewDp = '';
        if (imagePreviewUrlDp != '') {
            $imagePreviewDp = (<img src={imagePreviewUrlDp} />);
        }
        else {
            $imagePreviewDp = (<div className="previewText">Please select an Image for Preview</div>);
        }


        let imagePreviewUrl1 = this.state.pic1;
        let $imagePreview1 = '';
        if (imagePreviewUrl1 != '') {
            $imagePreview1 = (<img src={imagePreviewUrl1} />);
        }
        else {
            console.log("else " + imagePreviewUrl1)
            $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let imagePreviewUrl2 = this.state.pic2;
        let $imagePreview2 = '';
        if (imagePreviewUrl2 != '') {
            $imagePreview2 = (<img src={imagePreviewUrl2} />);
        } else {
            $imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let imagePreviewUrl3 = this.state.pic3;
        let $imagePreview3 = '';
        if (imagePreviewUrl3 != '') {
            $imagePreview3 = (<img src={imagePreviewUrl3} />);
        }
        else {
            $imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let imagePreviewUrl4 = this.state.pic4;
        let $imagePreview4 = '';
        if (imagePreviewUrl4 != '') {
            $imagePreview4 = (<img src={imagePreviewUrl4} />);
        }
        else {
            $imagePreview4 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let imagePreviewUrl5 = this.state.pic5;
        let $imagePreview5 = '';
        if (imagePreviewUrl5 != '') {
            $imagePreview5 = (<img src={imagePreviewUrl5} />);
        }
        else {
            $imagePreview5 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let imagePreviewUrl6 = this.state.pic6;
        let $imagePreview6 = '';
        if (imagePreviewUrl6 != '') {
            $imagePreview6 = (<img src={imagePreviewUrl6} />);
        }
        else {
            $imagePreview6 = (<div className="previewText">Please select an Image for Preview</div>);
        }


        let $buttonPic1='';
        if(this.state.remove_pic1){
            $buttonPic1= (<button onClick={(e)=>this.removeImage(e,1,this.state.pic1_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic1= (<input type="file" onChange={(e) => this.ImageChange(e, 1, this.state.pic1_id)} />);
        }

        let $buttonPic2='';
        if(this.state.remove_pic2){
            $buttonPic2= (<button onClick={(e)=>this.removeImage(e,2,this.state.pic2_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic2= (<input type="file" onChange={(e) => this.ImageChange(e, 2, this.state.pic2_id)} />);
        }

        let $buttonPic3='';
        if(this.state.remove_pic3){
            $buttonPic3= (<button onClick={(e)=>this.removeImage(e,3,this.state.pic3_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic3= (<input type="file" onChange={(e) => this.ImageChange(e, 3, this.state.pic3_id)} />);
        }

        let $buttonPic4='';
        if(this.state.remove_pic4){
            $buttonPic4= (<button onClick={(e)=>this.removeImage(e,4,this.state.pic4_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic4= (<input type="file" onChange={(e) => this.ImageChange(e, 4, this.state.pic4_id)} />);
        }

        let $buttonPic5='';
        if(this.state.remove_pic5){
            $buttonPic5= (<button onClick={(e)=>this.removeImage(e,5,this.state.pic5_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic5= (<input type="file" onChange={(e) => this.ImageChange(e, 5, this.state.pic5_id)} />);
        }

        let $buttonPic6='';
        if(this.state.remove_pic6){
            $buttonPic6= (<button onClick={(e)=>this.removeImage(e,6,this.state.pic6_id)} value="Remove Image" >Remove Image</button>);
        }
        else{
            $buttonPic6= (<input type="file" onChange={(e) => this.ImageChange(e, 6, this.state.pic6_id)} />);
        }


        return (
            <div className="marginauto ">
                <h3>Hostel Profile Picture:</h3>

                <div className="previewComponent">
                    <div className="imgPreview">
                        {$imagePreviewDp}
                    </div>
                    <input type="file" onChange={(e) => this.ImageChange(e, 0, 0)} />
                </div>
                <br /> <b> <p className="error-message">{this.state.profilePicErrorMsg} </p> </b>
                <br />
                <br /><br />

                <h3>Hostel Pictures:</h3>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview1}
                        </div>
                        {$buttonPic1}
                    </div>
                    <br />
                </div>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview2}
                        </div>
                        {$buttonPic2}
                    </div>
                    <br />
                </div>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview3}
                        </div>
                        {$buttonPic3}
                    </div>
                    <br />
                </div>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview4}
                        </div>
                        {$buttonPic4}
                    </div>
                    <br />
                </div>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview5}
                        </div>
                        {$buttonPic5}
                    </div>
                    <br />
                </div>

                <div className=" col-md-4">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview6}
                        </div>
                        {$buttonPic6}
                    </div>
                    <br />
                </div>

                <div>
                    {this.errorMsg()}
                </div>
                <br /> <b> <p className="error-message">{this.state.generealPicErrorMsg} </p> </b>

            </div>
        );
    }
}

export default HostelPicturesSetup;