import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

class NavbarMain extends React.Component {

  render() {
    return (
      <Navbar
      fixed="top"
      className="nav-bar"
      bg="dark"
      variant="dark">
        <Navbar.Brand href="/">
        <img alt="logo"
        src= "uob_logo.jpeg"
        width="80"
        height="80">
        </img>
        </Navbar.Brand>
        <Navbar.Text className='Nav-title'>
          Formation Binner
        </Navbar.Text>

      </Navbar>
    )
  }
}

export default NavbarMain;
