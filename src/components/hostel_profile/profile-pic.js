import React, { Component } from 'react';
import '../stylesheets/hostel-profile.css'
import SideNav from '../Navigation/side-nav';
import TopMenu from '../Navigation/top-menu';
import '../stylesheets/side-nav.css';
import '../stylesheets/top-menu.css';



class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
          
        });
        
      }
      
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div>
        <div id="left-div">
        <SideNav/>
        </div>

        <div id="right-div">

            <div id="top-menu">
            <TopMenu/>
            </div>

            <div id="menu2">
            <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
        
          </div>
          <p>{imagePreviewUrl}</p>
        </div>
            </div>

        </div>


    </div>
        
      )
    }
  }
    
  export default ImageUpload;