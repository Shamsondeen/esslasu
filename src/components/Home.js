import React, { Component } from 'react';
import president from '../assets/ex1.png';
import vp from '../assets/ex2.jpg';
import gns from '../assets/ex7.png';
import ags from '../assets/ex6.png';
import PRO from '../assets/ex3.png';
import treasurer from '../assets/ex4.png';
import PLO from '../assets/ex9.png';
import finsec from '../assets/ex5.png';
import scd from '../assets/ex8.png';
import welfare from '../assets/welfare.png';
import academic from '../assets/01.png';
import Hostel from '../assets/03.png';
import Welfare from '../assets/04.png';
import Transport from '../assets/06.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer/Footer';




class Home extends Component {

    render() {
        var settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,


            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        speed: 400,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        speed: 400,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <React.Fragment>
            <header className="header">
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                        <span class="heading-primary__sub">We Are</span>
                            <span className="heading-primary__main">Lasu </span>
                            <span class="heading-primary__sub">We Are Proud</span>
                            <span class="heading-primary__sub-1">ENGINEERING STUDENT SOCIETY</span>
                        </h1>
                    </div>
                </header>
            {/*Executives*/}
            <div className="container">
                        <div className="slider">
                            <div className="col-12">
                                <div className="col-lg-12 col-md-6 col-12 mb-3">
                                    <div className="heading">
                                        <h2 className='text-center'>OUR EXECUTIVES</h2>
                                    </div>
                                </div>
                                <Slider {...settings} className="col-lg-12 col-md-6 col-12 mb-3 container">



                                    {/* President */} 
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={president} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">DAVID IBRAHIM</a></h2>
                                                <h3 className='text-center'>PRESIDENT
                                                </h3>
                                            </div></div>
                                    </div>
                                    {/*End Of President */}
                                    {/* Vice President */}
                                    <div className="col-lg-12">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={vp} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">Adeleke Ridwat</a></h2>
                                                <h3 className='text-center'>VICE PRESIDENT
                                                </h3>
                                            </div></div>
                                    </div>
                                    {/*End Of Vice President*/}

                                    {/* GenSec */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">

                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={gns} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">Oladele Samuel</a></h2>
                                                <h4 className='text-center'>GENERAL SECRETARY
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of GenSec */}


                                    {/* AGS */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={ags} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h3 className=" text-center"><a className="post-title">Aiyeola Precious</a></h3>
                                                <h4 className='text-center'>ASSIS. GENERAL SECRETARY
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of AGS */}

                                    {/* WelFare */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={welfare} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Ayoku Quam</a></h4>
                                                <h4 className='text-center'>WELFARE DIRECTOR
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of WelFare */}

                                    {/*FinSec*/}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={finsec} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Opaise Oguns</a></h4>
                                                <h4 className='text-center'>FINANCIAL SECRETARY
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of FinSec */}

                                    {/* Sport Director */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={scd} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Ogunbiyi Ifeoluwa</a></h4>
                                                <h4 className='text-center'> SPORT DIRECTOR
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Sport Director */}

                                    {/* PRO */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={PRO} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Olayide Damilola</a></h4>
                                                <h4 className='text-center'> PUBLIC RELATION OFFICER
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of PRO*/}

                                    {/* PRO */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={treasurer} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Illesanmi Rebecca</a></h4>
                                                <h4 className='mt-3 text-center'> TREASURER
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of PRO*/}

                                    {/* PLO */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={PLO} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h4 className="mt-3 text-center"><a className="post-title">Shoyoye Ismaila </a></h4>
                                                <h4 className='text-center'> PUBLIC LIASON OFFICER
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of PLO*/}



                                </Slider>
                            </div>
                        </div>
                    </div>
                    {/* End Of Executives */}
            {/*Responbilities*/}
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
            {/* News*/}
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
            {/* Footer */}
            <Footer />
            </React.Fragment>

        )
    }
}



export default Home;




