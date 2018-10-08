import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './top-menu.css';



class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

    };
  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  signOut = () => {
    this.setState({ signOutRedirect: true })
  }

  // window.onclick = (e)=> {
  //   if (!e.target.matches('.dropbtn')) {
  //     var myDropdown = document.getElementById("myDropdown");
  //       if (myDropdown.classList.contains('show')) {
  //         myDropdown.classList.remove('show');
  //       }
  //   }
  // }

  render(e) {
    if (this.state.signOutRedirect) {
      localStorage.clear();
      return <Redirect exact to="/" />
    }

    // if (!e.target.matches('.dropbtn')) {
    //   var myDropdown = document.getElementById("myDropdown");
    //     if (myDropdown.classList.contains('show')) {
    //       myDropdown.classList.remove('show');
    //     }
    // }

    return (
      <div>
        {/* <ButtonToolbar>
        <DropdownButton title="Usman" >
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>

        </ButtonToolbar> */}
        


        {/* <div class="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a onClick={this.signOut}>Signout</a>
          <div class="dropdown">
            <button class="dropbtn" onclick="myFunction()">Dropdown
      <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div> */}

        {/* <div id='cssmenu'>
          <ul>
            <li><a onClick={this.signOut}>Signout</a></li>
            <li id="last-menu"><a href='google.com'>Contact Us</a></li>
            <li><a href='google.com'>Services</a></li>
            <li><a href='google.com'>About Us</a></li>
            <li className='active'><a href='google.com'>Home</a></li>

          </ul>
        </div> */}
      </div>
    );
  }
}

export default TopMenu;