import React, { Component } from 'react';
import president from '../../assets/ex1.png';
import vp from '../../assets/ex2.jpg';
import gns from '../../assets/ex7.png';
import ags from '../../assets/ex6.png';
import PRO from '../../assets/ex3.png';
import treasurer from '../../assets/ex4.png';
import PLO from '../../assets/ex9.png';
import finsec from '../../assets/ex5.png';
import scd from '../../assets/ex8.png';
import welfare from '../../assets/welfare.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class Executives extends Component {

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
        return(
            <React.Fragment>
                 {/* Executives Section*/}
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
            </React.Fragment>
        )

    }
}

export default Executives;