import React, { Component } from 'react';
import Footer from '../Footer/Footer'


export default class AllNews extends Component {
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
                                <div className="col-lg-12 col-md-6 col-12 mt-2 mb-2">
                                    <div className="post">
                                        <div className="bg-white rounded shadow p-2">
                                            <ul className="post-meta list-unstyled list-inline mb-3">
                                                <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />May 16th, 2020</li>
                                            </ul>
                                            <hr />
                                            <h4 className="mb-2"><a className="news-title">FROM THE PRESIDENT'S OFFICE</a></h4>
                                            <p className="text-dark mb-0">Greatest Engineering students!!!
                                            We are proud, delighted and thankful that despite the fears, popularity and terrors of the corona virus pandemic,  we still are responsible enough to keep obeying all protocols by those in authority against further out spread.  We love you and we are proud.
                                            I and my team will like to inform you that we will still keep serving you in the best way we can, even with hurdles and uncertainty clouding our our plans.  We promised to keep developing the society in every ramification and increase the repute,integrity and popularity of our great ESS-LASU and at the end of the day, hand over an association with a better value than the one we inherited.
                                            Having a quality parliamentary council ably led by the speaker RT.HON IDOWU SADIQ, to checkmate the dealings of the Executive Council (my ever supportive team) has only yielded good outcomes, and long may it continue.
                                            Ladies and gentlemen, with your prayers and cooperation we will keep moving a step forward towards technolocal advancement in this undisputed Era. Now, we are looking to get our alumni back into the system, to once again develop into a formidable association and a one big family.
                                            Yours in struggle<br/>
                                            David Ibrahim O<br/>
                                            President, ESS-LASU</p>
                                        </div></div></div>
                                {/*End Of 1st Post*/}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
