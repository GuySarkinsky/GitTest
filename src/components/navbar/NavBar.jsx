import React, { useEffect, useState } from 'react';
import {Navbar, Form, Button, FormControl, Nav, Container} from 'react-bootstrap';


import { connect } from 'react-redux';
import * as actionType from '../../store/actions'
import rayfundLogo from '../../imgs/rayfund-logo-300x180.png'


const NavBar = (props) => {



    useEffect(() => {
        // eslint-disable-next-line
    }, [])


    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src={rayfundLogo} style={{width:"150px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">All projects</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Packages</Nav.Link>
            <Button onClick={() => props.setShowLoginModal(true)} style={{background:"none", border:"none", color:"rgba(0,0,0,.5)"}}>Login</Button>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search fund" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>        
      </Navbar>
    )
}

const mapStateToProps = state => {
  return {
    showLoginModal: state.users.showLoginModal
  };
}

const mapDispatchToProps = dispatch => {
  return {
      setShowLoginModal: (showLoginModal) => dispatch({ type: actionType.SHOW_LOGIN_MODAL, showLoginModal: showLoginModal })
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);




