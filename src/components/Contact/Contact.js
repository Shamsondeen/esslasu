import React, { Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


import './Contact.css';



class Contact extends Component {
    state = {
        modalIsOpen: false
    }

    toggleModal() {
        const { name, email, message } = this.state
        if (name && email && message) {
           this.setState({       
                    modalIsOpen: true
        })
          } else {
            this.setState({       
                modalIsOpen: false
    })
          }
       
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
        const form = await axios.post('https://quiet-earth-29164.herokuapp.com/api/esslasu', {
            name,
            email,
            message
        })

    }

    render() {
        return (
            <React.Fragment>
                <section id="contact" className="contact-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title text-center pb-30">
                                    <h3 className="title">Contact</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-map mt-30">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4705506365704!2d3.9874067142667755!3d6.588283624235863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10394675c49e1089%3A0x1a99304f1138c2f8!2sLagos%20State%20University%2CEpe%20Campus!5e0!3m2!1sen!2sng!4v1588418214744!5m2!1sen!2sng" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-info pt-30 mt-3">
                            <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="single-contact-info contact-color-1 mt-30 d-flex ">
                                        <div className="contact-info-icon">
                                            <i className="lni lni-map-marker" />
                                        </div>
                                        <div className="contact-info-content media-body">
                                            <p className="text"> Lasu Epe Campus<br />EPE LAGOS.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="single-contact-info contact-color-2 mt-30 d-flex ">
                                        <div className="contact-info-icon">
                                            <i className="lni lni-facebook" /> @Lasu_engineering
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="single-contact-info contact-color-3 mt-30 d-flex ">
                                        <div className="contact-info-icon">
                                            <i className="lni lni-twitter" /> @esslasu2020
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="single-contact-info contact-color-4 mt-30 d-flex ">
                                        <div className="contact-info-icon">
                                            <i className="lni lni-instagram" /> @Lasu_engineering
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-wrapper form-style-two pt-115">
                                    <h4 className="contact-title pb-10"><i className="lni lni-envelope" /> Leave <span>A Message.</span></h4>
                                    <form onSubmit={this.handleSubmit} method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-input mt-25">
                                                    <label>Name</label>
                                                    <div className="input-items default">
                                                        <input type='name' name="name" type="text" placeholder="Name" onChange={this.handleChange} required/>
                                                        <i className="lni lni-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-input mt-25">
                                                    <label>Email</label>
                                                    <div className="input-items default">
                                                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} required/>
                                                        <i className="lni lni-envelope" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-input mt-25">
                                                    <label>Massage</label>
                                                    <div className="input-items default">
                                                        <textarea type='textarea' name="message" placeholder="Message" defaultValue={""} onChange={this.handleChange} required/>
                                                        <i className="lni lni-pencil-alt" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="form-message" />
                                            <div className="col-md-12">
                                                <div className="form-input light-rounded-buttons mt-30">
                                                    <button type='submit' className="main-btn light-rounded-two" onClick={this.toggleModal.bind(this)}>Send Message</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Vote Of Thanks</ModalHeader>
                    <ModalBody><h1>THANKS FOR MESSAGING US WE'LL GET BACK TO YOU SHORTLY</h1></ModalBody>
                    <ModalFooter><Link to='/'><button  className="main-btn light-rounded-two ">HOME</button></Link></ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default withRouter(Contact);
