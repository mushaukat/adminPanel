import React, { Component } from 'react';
import './side-nav.css';

class App1 extends Component {
    render() {
        let $imagePreview = null;
        let imagePreviewUrl=null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Update Profile picture from Hostel Profile</div>);
      }
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">

                        <div className="imgPreview" id="imagePreview">
                            {$imagePreview}
                        </div>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Hostel Name</p>
                        <li className="active">
                            <a href="google.com">Dashboard</a>
                        </li>

                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Hostel Profile</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li><a href="google.com">Profile</a></li>
                                <li><a href="google.com">Home 2</a></li>
                                <li><a href="google.com">Home 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false">Room Mangement</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu1">
                                <li><a href="google.com">Home 5</a></li>
                                <li><a href="google.com">Home 25</a></li>
                                <li><a href="google.com">Home 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="google.com">Mess Menu</a>
                        </li>

                        <li>
                            <a href="google.com">Notifications</a>
                        </li>
                        <li>
                            <a href="google.com">About</a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li><a href="google.com">Page 1</a></li>
                                <li><a href="google.com">Page 2</a></li>
                                <li><a href="google.com">Page 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="google.com">Portfolio</a>
                        </li>
                        <li>
                            <a href="google.com">Log Out</a>
                        </li>
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
                        <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App1;