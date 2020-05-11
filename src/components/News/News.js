import React, { Component } from 'react';
import './News.css';

export default class News extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section p-3">
                        {/*Start Of News*/}
                        <div className="page-triangle triangle-light">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        {/*End of News*/}<div className="section-title text-center">
                                            <h3 className="title text-capitalize">News &amp; Announcements</h3>
                                            <hr />
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end row*/}
                                <div className="row">
                                    {/*Start Of 1st Post*/}
                                    <div className="col-lg-4 col-md-6 col-12 mt-2 mb-2">
                                        <div className="post">
                                            <div className="bg-white rounded shadow p-2">
                                                <ul className="post-meta list-unstyled list-inline mb-3">
                                                    <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />August 15th, 2019</li>
                                                </ul>
                                                <hr />
                                                <h4 className="mb-2"><a className="news-title">CORONA VIRUS UPDATE</a></h4>
                                                <p className="text-dark mb-0">Coronavirus disease 2019 (COVID-19) is a respiratory
                                                illness that can spread from person to person. The virus that causes COVID-19 is
                                                a novel coronavirus that was first identified during an investigation into an outbreak
                                        in Wuhan, China.</p>
                                                <div className="read-more mb-3 mt-2"><a href="https://lasu.edu.ng/covid_19_updates/" className="text-dark"> Read More <i className="fas fa-arrow-right ml-2" /></a></div>
                                            </div></div></div>
                                    {/*End Of 1st Post*/}
                                    {/*Start Of 2nd Post*/}
                                    <div className="col-lg-4 col-md-6 col-12 mt-2 mb-2">
                                        <div className="post">
                                            <div className="bg-white rounded shadow p-2 position-relative">
                                                <ul className="post-meta list-unstyled list-inline mb-3">
                                                    <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />August 15th, 2019</li>
                                                </ul>
                                                <hr />
                                                <h4 className="mb-2"><a className="news-title">FROM THE VC'S DESK</a></h4>
                                                <p className="text-dark mb-0">Respected Colleagues And Our World Class Students
                                                As we find ourselves confined to our houses in obedience
                                                to the directives of the government aimed at preventing
                                    and controlling the scourge of Coronavirus disease (COVID-19).</p>
                                                <div className="read-more mb-3 mt-2"><a href="https://lasu.edu.ng/site_info/vc_desk.php" className="text-dark"> Read More <i className="fas fa-arrow-right ml-2" /></a></div>
                                            </div></div></div>
                                    {/*End Of 2nd Post*/}
                                    {/*Start Of 3rd Post*/}
                                    <div className="col-lg-4 col-md-6 col-12 mt-2 mb-2">
                                        <div className="post">
                                            <div className="bg-white rounded shadow p-2 position-relative">
                                                <ul className="post-meta list-unstyled list-inline mb-3">
                                                    <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />August 15th, 2019</li>
                                                </ul>
                                                <hr />
                                                <h4 className="mb-2"><a className="news-title">FROM THE VC'S DESK</a></h4>
                                                <p className="text-dark mb-0">Happy Resumption our world class Students
                                                Our world class students, happy resumption. This rain semester
                                                presents you with another opportunity to
                                                blaze the frontiers in academics, sports,
                                        research, innovations.</p>
                                                <div className="read-more mb-3 mt-2"><a href="https://lasu.edu.ng/site_info/vc_desk.php" className="text-dark"> Read More <i className="fas fa-arrow-right ml-2" /></a></div>
                                            </div></div></div>

                                    {/*End Of 3rd Post*/}
                                </div>
                            </div>
                        </div>
                        {/*End News*/}

                    </section>
            </React.Fragment>
        )
    }
}
