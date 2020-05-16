import React, { Component } from 'react';
import speaker from '../../assets/spc1.png';
import dsp from '../../assets/spc2.png';
import clerk from '../../assets/spc3.png';
import whip from '../../assets/spc4.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class Parliament extends Component {

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
                                        <h2 className='text-center'>ESSLASU PARLIAMENTARY COUNCIL</h2>
                                    </div>
                                </div>
                                <Slider {...settings} className="col-lg-12 col-md-6 col-12 mb-3 container">



                                    {/* President */} 
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={speaker} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">IDOWU SODIQ</a></h2>
                                                <h3 className='text-center'>SPEAKER ESPC
                                                </h3>
                                            </div></div>
                                    </div>
                                    {/*End Of President */}
                                    {/* Vice President */}
                                    <div className="col-lg-12">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={dsp} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">AYINDE AYOMIDE</a></h2>
                                                <h3 className='text-center'>DEPUTY SPEAKER ESPC
                                                </h3>
                                            </div></div>
                                    </div>
                                    {/*End Of Vice President*/}

                                    {/* GenSec */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">

                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={clerk} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h2 className="mb-2 text-center"><a className="post-title">HASSAN ABDULRAHMAN</a></h2>
                                                <h4 className='text-center'>CHIEF WHIP ESPC
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of GenSec */}


                                    {/* AGS */}
                                    <div className="col-lg-12 col-md-6 col-12 mb-3">
                                        <div className="post">
                                            <div className="post-preview overflow-hidden">
                                                <a><img src={whip} alt="blog-img" className="img-fluid mx-auto d-block rounded mb-2" /></a>
                                            </div>{/*end img*/}
                                            <div className="post-content bg-white rounded shadow p-2 position-relative">
                                                <h3 className=" text-center"><a className="post-title">AKINMULEYA DAMILOLA</a></h3>
                                                <h4 className='text-center'>CLERK ESPC
                                                </h4>
                                            </div></div>
                                    </div>
                                    {/* End Of AGS */}


                                </Slider>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )

    }
}

export default Parliament;