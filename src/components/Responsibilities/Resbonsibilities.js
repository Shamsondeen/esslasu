import React, { Component } from 'react';
import academic from '../../assets/01.png';
import Hostel from '../../assets/03.png';
import Welfare from '../../assets/04.png';
import Transport from '../../assets/06.png';

import './Responsibilities.css'

export default class Responbilities extends Component {
    render() {
        return (
            <React.Fragment>
                  {/*Start Of Responsibilties*/}
                  <div className="responsibilities">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-lg-3 col-sm-6 ">
                                    <div className="responsibility">
                                        <img src={academic} className="responsibility__icon " />
                                        <div>
                                            <h3>Academic and Career Talk</h3>
                                            <p>
                                            Organises career talks, inspirational and motivational lectures among the students.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 ">
                                    <div className="responsibility">
                                        <img src={Hostel} className="responsibility__icon" />
                                        <div>
                                            <h3 className="heading-tertiary">Accommodation</h3>
                                            <p>
                                            Supervises the use of facilities and renovations in the hostels on campus during the holiday.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="responsibility">
                                        <img src={Transport} className="responsibility__icon" />
                                        <div>
                                            <h3 className="heading-tertiary">Transportation</h3>
                                            <p>
                                            Through its Transport Scheme, shuttle buses are provided for transportation at a subsidised rate.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 ">
                                    <div className="responsibility">
                                        <img src={Welfare} className="responsibility__icon" />
                                        <div>
                                            <h3 className="heading-tertiary">Welfarism</h3>
                                            <p>
                                            Handles all matters relating to the general welfare of members of the Union and all the Union guests.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/*End Of Responsibilties*/}
            </React.Fragment>
        )
    }
}
