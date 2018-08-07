import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import '../stylesheets/profile-pic.css'
import axios from 'axios';


class GeneralInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dp: '',
            pic1: '',
            pic2: '',
            pic3: '',
            pic4: '',
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

    axios.get('/blockProfileImage/'+data.block_id+'/'+data.hostel_id)
      .then(
        response => {
              this.setState({ dp: response.data });
            
        });
         
    axios.get('/getAllGeneralImages/'+data.block_id+'/'+data.hostel_id)
      .then(
        response => {
            for(var i = 0; i < response.data.Data.length; i++) {
                    var obj = response.data.Data[i];

                    console.log(obj.image);
                    var count=i;
                axios.get('/blockGeneralImage/'+obj.image+'/'+data.block_id+'/'+data.hostel_id)
                        .then(
                    response => {
                        console.log(count);
                    });
                }
    
            
        });
         
  }

    errorMsg = () => {
        if (this.state.Error) {
            return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
        }

    }

    submitData = (e, url) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        var formData = new FormData();
        formData.append("image", this.state.file);
        formData.append("block_id", userData.block_id);
        formData.append("hostel_id", userData.hostel_id);
//        const data = {
//            block_id: userData.block_id,
//            hostel_id: userData.hostel_id,
//            image: this.state.file,
//        };
        console.log(this.state.dp)
        if (url == 'dp') {
            this.setState({ address: '/uploadBlockProfileImage' })
        }
        else {
            this.setState({ address: '/uploadBlockGeneralImage' })
        }


        console.log(formData);
        axios.post(this.state.address, formData, { headers: {  } })
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
                }).catch(function (error) {
                    console.log(error.response);
                });

    }

    ImageChange(e, count) {
        e.preventDefault();
        this.setState({ count: count, });
        console.log(count)

        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({ file: file, });

        reader.onloadend = () => {

            if (count == 'dp') {
                const pic = { file: file, imagePreviewUrlDp: reader.result }
                this.setState({ dp: pic, });
                console.log(pic)
                const url = "dp"
                this.submitData(e, url)
            }
            else if (count == '1') {
                const pic = { file: file, imagePreviewUrl1: reader.result }
                this.setState({ pic1: pic, });
                const url = "1"
                this.submitData(e, url)
            }
            else if (count == '2') {
                const pic = { file: file, imagePreviewUrl2: reader.result }
                this.setState({ pic2: pic, });
                const url = "2"
                this.submitData(e, url)
            }
            else if (count == '3') {
                const pic = { file: file, imagePreviewUrl3: reader.result }
                this.setState({ pic3: pic, });
                const url = "3"
                this.submitData(e, url)
            }
            else if (count == '4') {
                const pic = { file: file, imagePreviewUrl4: reader.result }
                this.setState({ pic4: pic, });
                const url = "4"
                this.submitData(e, url)
            }
            // console.log(pic)

        }

        reader.readAsDataURL(file)
    }

    render() {

        let { imagePreviewUrlDp } = this.state.dp;
        let $imagePreviewDp = null;
        if (imagePreviewUrlDp) {
            $imagePreviewDp = (<img src={imagePreviewUrlDp} />);
        } else {
            $imagePreviewDp = (<div className="previewText">Please select an Image for Preview</div>);
        }


        let { imagePreviewUrl1 } = this.state.pic1;
        let $imagePreview1 = null;
        if (imagePreviewUrl1) {
            $imagePreview1 = (<img src={imagePreviewUrl1} />);
        } else {
            $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let { imagePreviewUrl2 } = this.state.pic2;
        let $imagePreview2 = null;
        if (imagePreviewUrl2) {
            $imagePreview2 = (<img src={imagePreviewUrl2} />);
        } else {
            $imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let { imagePreviewUrl3 } = this.state.pic3;
        let $imagePreview3 = null;
        if (imagePreviewUrl3) {
            $imagePreview3 = (<img src={imagePreviewUrl3} />);
        } else {
            $imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
        }

        let { imagePreviewUrl4 } = this.state.pic4;
        let $imagePreview4 = null;
        if (imagePreviewUrl4) {
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
                    <input type="file" onChange={(e) => this.ImageChange(e, "dp")} />
                </div>
                <br />
                <br /><br />

                <h3>Hostel Pictures:</h3>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview1}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 1)} />
                        {/* <p>{imagePreviewUrl1}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview2}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 2)} />
                        {/* <p>{imagePreviewUrl2}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview3}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 3)} />
                        {/* <p>{imagePreviewUrl3}</p> */}
                    </div>
                    <br />
                </div>

                <div className=" col-md-3">
                    <div className="previewComponent">
                        <div className="imgPreview">
                            {$imagePreview4}
                        </div>
                        <input type="file" onChange={(e) => this.ImageChange(e, 4)} />
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