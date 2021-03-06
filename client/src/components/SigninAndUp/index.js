import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./index.css"
class SigninAndUp extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null,
        }
        this.handleSignin = this.handleSignin.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignin = (event) => {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/signin', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/create'
                    })
                    this.props.closeModal();
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    handleSignup(event) {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/signup', {
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
                    })
                    this.props.closeModal();
                    this.props.openModal2();
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="loginDiv">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="email">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Username"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            
                            <button 
                                className="btn btn-primary col-3 col-mr-auto not-ugly-buttons"

                                onClick={this.handleSignin}{...this.toggleModal}
                                type="submit">Login</button>
                                <button
						className="btn btn-primary col-3 col-mr-auto not-ugly-buttons"
						onClick={this.handleSignup}
						type="submit"
					>Sign up</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SigninAndUp