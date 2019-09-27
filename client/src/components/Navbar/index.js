import React, { Component } from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import Logo from '../../images/nobg.png'
import { Navbar, Button, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { Button as Button2, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import SigninAndUp from "../SigninAndUp";
import "./Navbar.css"
class NavbarComponent extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      redirectTo: null
    };
  }
  closeModal = () => {
    this.setState({
      modal: false
    })
  }
  check = () => {
    if (this.props.loggedIn === false) {
      this.setState({
        modal: true
      })
    }
  }
  logout = (event) => {
    event.preventDefault()
    console.log('logging out')

    axios.post('/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
        this.props.history.push("/")
      }

    }).catch(error => {
      console.log('Logout error')
    })
  }
  render() {
      const loggedIn = this.props.loggedIn;
      const closeBtn = <button className="close" onClick={this.closeModal}>&times;</button>;
      return (
        <div>
          <header className="navbar App-header" id="nav-container">
            <div className="col-4" >
              {loggedIn ? (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">Home</span>
                  </Link>
                  <Link to={loggedIn ? "/create" : "/"} className="btn btn-link" onClick={this.check}>
                    <span className="text-secondary">Create a Quiz</span>
                  </Link>
                  <Link to="/" className="btn btn-link text-secondary" onClick={this.logout}>
                    <span className="text-secondary">Logout</span>
                  </Link>
                </section>
              ) : (
                  <section className="navbar-section">
                    <Link to="/" className="btn btn-link text-secondary">
                      <span className="text-secondary">Home</span>
                    </Link>
                    <Link to={loggedIn ? "/create" : "/"} className="btn btn-link" onClick={this.check}>
                      <span className="text-secondary">Create a Quiz</span>
                      <Link to="/" className="btn btn-link" onClick={this.check}>
                        <span className="text-secondary">Login</span>
                      </Link>
                    </Link>
                  </section>
                )}
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle} close={closeBtn}>You must login to create a quiz!</ModalHeader>
              <ModalBody>
                <SigninAndUp updateUser={this.props.updateUser} closeModal={this.closeModal} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.closeModal}
                >Close</Button>
              </ModalFooter>

            </Modal>

            <div className="col-6 col-mr-auto">
              <div id="top-filler"></div>
              <h1 className="App-title">{this.props.email}Taking Care of Quizness</h1>
              <img src={Logo} className="App-logo" alt="logo" />
            </div>
          </header>
        </div>
      );
  }
}
export default withRouter(NavbarComponent);