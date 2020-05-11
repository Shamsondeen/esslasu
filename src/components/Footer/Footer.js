import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import axios from 'axios';
import './Footer.css';

class Footer extends Component {
    state = {
        modalIsOpen: false
    }

    toggleModal() {
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        })
    }
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/esslasu', {
            name,
            email,
            message
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="widget_item widget_newsletter sm-m-top-50">
                                    <hr className="light" />
                                    <h5>SUGGESTIONS</h5>
                                    <hr className="light" />
                                    <form className="form- m-top-30" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="name" id placeholder="Name" className="form-control" className="input-field" onChange={this.handleChange} />
                                            <input type="email" name="email" className="form-control" placeholder="Enter your Email" className="input-field" onChange={this.handleChange} />
                                            <textarea name="message" className="form-control" className="input-field" placeholder="Your Suggestions" cols={20} rows={4} onChange={this.handleChange} />
                                            <button type='submit' className="btn btn-primary text-center"  onClick={this.toggleModal.bind(this)}>SUBMIT</button>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 text">
                                <div className="widget_item widget_newsletter sm-m-top-50">
                                    <hr className="light" />
                                    <h5 className="text-center">Contact Us</h5>
                                    <hr className="light" />
                                    <h4 className="text-center"><i className="fas fa-home" /> Our Address</h4>
                                    <h6 className="text-center">
                                        <address>
                                            Lasu Rd, 106101, Epe<br />
                                    Lagos State University,
                                    <br />Epe Campus<br />
                                    Lagos State
                                    </address>
                                    </h6>
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <ul className="social text-center mt-60">
                                    <li> <a href="https://www.facebook.com/groups/663242060534989/"><i className="lni lni-facebook-filled" /></a></li>
                                    <li><a href="https://twitter.com/esslasu2020/"><i className="lni lni-twitter-original" /></a></li>
                                    <li><a href="https://www.instagram.com/lasu_engineering/"><i className="lni lni-instagram-original" /></a></li>
                                </ul>

                                <hr className="light-100" />
                                <h4><i className="far fa-lightbulb" /> POWERED BY DAVID OLUWADAMILARE IBRAHIM</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Vote Of Thanks</ModalHeader>
                    <ModalBody><h1>THANKS FOR YOUR SUGGESTION!</h1></ModalBody>
                </Modal>

            </React.Fragment>
        )
    }
}


export default withRouter(Footer);
