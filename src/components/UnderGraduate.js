import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default class UnderGraduate extends Component {
    state = {
        modalIsOpen: false
    }

        toggleModal() {
            const { name, email, level, number, matric } = this.state
            if (name && email && level && number && matric) {
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
            level:'',
            number: '',
            matric: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, level, number, matric } = this.state

        
        const form = await axios.post('https://quiet-earth-29164.herokuapp.com/api/undergraduate', {
            name,
            email,
            level,
            number,
            matric
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">ALUMNI DATA FORM</h1>
                            </div>
                            <div className="col-md-12">
                                <form onSubmit={this.handleSubmit} method="post">
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="name" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Email</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={this.handleChange} name="email" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Level</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={this.handleChange} name="level" required/>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Phone Number</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" onChange={this.handleChange} name="number" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Matric Number</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" onChange={this.handleChange} name="matric" required/>
                                        </div>
                                        <button type='submit' className="btn btn-primary text-center mt-2" onClick={this.toggleModal.bind(this)}>SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Vote Of Thanks</ModalHeader>
                    <ModalBody><h1>THANKS FOR TAKING YOUR TIME TO FILL THIS FORM WE REALLY APPRICIATE</h1></ModalBody>
                    <ModalFooter><Link to='/'><button  className="main-btn light-rounded-two ">HOME</button></Link></ModalFooter>
                </Modal>

            </React.Fragment>
        )
    }
}
