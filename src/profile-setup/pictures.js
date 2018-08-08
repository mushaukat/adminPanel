import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import '../stylesheets/profile-pic.css'
import axios from 'axios';


class GeneralInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dp2: null,
            dp:'',
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
            file: ''
        };
        
    }

    componentDidMount() {

        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData);
        const data = {
            block_id: userData.block_id,
            hostel_id: userData.hostel_id,
        };

        var a = 'http://www.hostinn.pk:3300/api/blockProfileImage/' + data.block_id + '/' + data.hostel_id;
        console.log(a)
       
        axios.get('/getAllGeneralImages/' + data.block_id + '/' + data.hostel_id)
            .then(
                response => {
                    this.setState({
                        dp: a
                    })
                    for (var i = 0; i < response.data.Data.length; i++) {
                        var obj = response.data.Data[i];

                        if(i==0)
                        {
                        this.setState({
                            pic1: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                            pic1_id: obj.image_id
                        })    
                            console.log("pic1_id"+this.state.pic1_id);
                        }else  if(i==1)
                        {
                        this.setState({
                            pic2: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                            pic2_id: obj.image_id
                        })    
                            console.log("pic1_id"+this.state.pic2_id);
                        }else  if(i==2)
                        {
                        this.setState({
                            pic3: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                            pic3_id: obj.image_id
                        })    
                            console.log("pic1_id"+this.state.pic3_id);
                        }else  if(i==3)
                        {
                        this.setState({
                            pic4: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + obj.image + "/" + data.block_id + "/" + data.hostel_id,
                            pic4_id: obj.image_id
                        })    
                            console.log("pic1_id"+this.state.pic4_id);
                        }
                        
                        
                    }


                });

    }

    errorMsg = () => {
        if (this.state.Error) {
            return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
        }

    }

    submitData = (e, url,image_id) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        var formData = new FormData();
        formData.append("image", this.state.file);
        formData.append("block_id", userData.block_id);
        formData.append("hostel_id", userData.hostel_id);

        console.log("okk" + this.state.dp)
        if (url == 0) {
            this.setState({ address: '/uploadBlockProfileImage' })
        }
        else {
            console.log("appended"+image_id)
             formData.append("image_id", image_id);
            this.setState({ address: '/uploadBlockGeneralImage' })
        }


        axios.post(this.state.address, formData, { headers: {} })
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
                       
                         if(url==0)
                        {
                        this.setState({
                            dp: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + userData.block_id + "/" + userData.hostel_id
                        })    
                            console.log("pic1_id"+this.state.pic1_id);
                        }else  if(url==1)
                        {
                        this.setState({
                            pic1: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + userData.block_id + "/" + userData.hostel_id
                        })    
                            console.log("pic1_id"+this.state.pic2_id);
                        }else  if(url==2)
                        {
                        this.setState({
                            pic2: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + userData.block_id + "/" + userData.hostel_id
                        })    
                            console.log("pic1_id"+this.state.pic3_id);
                        }else  if(url==3)
                        {
                        this.setState({
                            pic3: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + userData.block_id + "/" + userData.hostel_id
                        })    
                            console.log("pic1_id"+this.state.pic4_id);
                        }else  if(url==4)
                        {
                        this.setState({
                            pic4: "http://www.hostinn.pk:3300/api/blockGeneralImage/" + response.data.Image + "/" + userData.block_id + "/" + userData.hostel_id
                        })    
                            console.log("pic1_id"+this.state.pic4_id);
                        }
                        
                        console.log(response.data);
                        console.log(response.data.Error);
                        this.setState({
                            redirect: true
                        })

                    }
                }).catch(function (error) {
                    console.log(error.response);
                });

    }

    ImageChange(e, count,image_id) {
        e.preventDefault();
        this.setState({ count: count, });
        console.log(count)

        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({ file: file, });

        reader.onloadend = () => {

            if (count == 0) {
                const pic = { file: file, imagePreviewUrlDp: reader.result }
                this.setState({ dp: pic, });
                console.log("b" + pic)
                this.submitData(e, count,image_id)
            }
            else if (count == 1) {
                const pic = { file: file, imagePreviewUrl1: reader.result }
                this.setState({ pic1: pic, });
               
                this.submitData(e, count,image_id)
            }
            else if (count == 2) {
                const pic = { file: file, imagePreviewUrl2: reader.result }
                this.setState({ pic2: pic, });
                
                this.submitData(e, count,image_id)
            }
            else if (count == 3) {
                const pic = { file: file, imagePreviewUrl3: reader.result }
                this.setState({ pic3: pic, });
                
                this.submitData(e, count,image_id)
            }
            else if (count == 4) {
                const pic = { file: file, imagePreviewUrl4: reader.result }
                this.setState({ pic4: pic, });
            
                this.submitData(e, count,image_id)
            }
            // console.log(pic)

        }

        reader.readAsDataURL(file)
    }

    render() {

        let  imagePreviewUrlDp  = this.state.dp;
        console.log("1" + imagePreviewUrlDp)
        let $imagePreviewDp = null;
        if (imagePreviewUrlDp!=null) {
            console.log("2" + imagePreviewUrlDp)
            $imagePreviewDp = (<img src={imagePreviewUrlDp} />);
        } else {
            $imagePreviewDp = (<div className="previewText">Please select an Image for Preview</div>);
        }


        let  imagePreviewUrl1  = this.state.pic1;
        let $imagePreview1 = null;
        if (imagePreviewUrl1!=null) {
            $imagePreview1 = (<img src={imagePreviewUrl1} />);
        } else {
            $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let  imagePreviewUrl2  = this.state.pic2;
        let $imagePreview2 = null;
        if (imagePreviewUrl2!=null) {
            $imagePreview2 = (<img src={imagePreviewUrl2} />);
        } else {
            $imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let  imagePreviewUrl3  = this.state.pic3;
        let $imagePreview3 = null;
        if (imagePreviewUrl3!=null) {
            $imagePreview3 = (<img src={imagePreviewUrl3} />);
        } else {
            $imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let  imagePreviewUrl4  = this.state.pic4;
        let $imagePreview4 = null;
        if (imagePreviewUrl4!=null) {
            $imagePreview4 = (<img src={imagePreviewUrl4} />);
        } else {
            $imagePreview4 = (<div className="previewText">Please select an Image for Preview</div>);
        }




        return (
            <div className="marginauto ">
                <h3>Hostel Profile Picture:</h3>

                <div className="previewComponent">
                    <div className="imgPreview">
                        {$imagePreviewDp}

                    </div>
                    <input type="file" onChange={(e) => this.ImageChange(e, 0,0)} />
                </div>
                <br />
                <br /><br />

                <h3>Hostel Pictures:</h3>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview1}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 1,this.state.pic1_id)} />
                        {/* <p>{imagePreviewUrl1}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview2}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 2,this.state.pic2_id)} />
                        {/* <p>{imagePreviewUrl2}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview3}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 3,this.state.pic3_id)} />
                        {/* <p>{imagePreviewUrl3}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview4}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 4,this.state.pic4_id)} />
                        {/* <p>{imagePreviewUrl4}</p> */}
                    </div>
                    <br />
                </div>

                <div>
                    {this.errorMsg()}
                </div>

            </div>
        );
    }
}

export default GeneralInfo;