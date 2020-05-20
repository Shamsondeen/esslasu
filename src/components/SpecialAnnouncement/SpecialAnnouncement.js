import React, { Component, useState } from 'react';
import Rahina from '../../assets/Rahina.jpeg';
import Sunday from '../../assets/Sunday.jpeg';
import { Link, withRouter } from 'react-router-dom';

import './Annon.css';

function ReadMore({ children, maxCharacterCount = 100}) {
  const text = children;

  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(100, 0) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <p>
      {resultString}
      <div className="read-more mb-3 mt-2" onClick={toggleIsTruncated}><a className="text-dark"> {isTruncated ? "Read More" : "Read Less"} <i className="fas fa-arrow-right ml-2" /></a></div>
    </p>
  )
}

function SpecialAnnouncement(props) {
    return (
      <React.Fragment>
        <section className="section p-3">
          {/*Start Of News*/}
          <div className="page-triangle triangle-light">
            <div className="container">
              <div className="row justify-content-space-evenly">
                <div className="col-12">
                  {/*End of News*/}<div className="section-title text-center">
                    <h3 className="title text-capitalize">Special Announcements</h3>
                    <hr />
                  </div>
                </div>{/*end col*/}
              </div>{/*end row*/}
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
                  <article className="post">
                    <div className="post-preview overflow-hidden">
                      <a><img src={Rahina} alt="blog-img" className="img-fluid mx-auto d-block rounded" /></a>
                      <div className="tag"><a className="btn btn-custom rounded btn-sm"><i className="fas fa-tag mr-2" /> Investment</a></div>
                    </div>{/*end img*/}
                    <div className="post-content-1 bg-white rounded shadow p-4 position-relative">
                      <ul className="post-meta list-unstyled list-inline mb-3">
                        <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />May 19th, 2020</li>
                      </ul>
                      <h4 className="mb-3"><a className="news-title"> ARISE!!!</a></h4>
                      <p className="text-black mb-0">On grounds of progressiveness, ESS-LASU presents to the world, HER very first online seminar and a four (4) day Life training and skill Aquisition event, themed  ARISE!!!<br/>
                      from Wednesday 3rd of June 2020--Saturday 6th of June 2020<br/>
                      Day one (1) will be a seminar on personal development. All other days are for training 
                      on the under-listed packages;<ReadMore> web  design, 
                      advanced graphics, 
                      advanced Excel for data analysis, digital marketing, white board animation, 
                      Photoshop, Microsoft word and  Microsoft power point
                      Then the certification comes last.
                      </ReadMore>
                    </p>
                    </div>{/*end post content*/}
                  </article>{/*end post*/}
                </div>{/*end col*/}

                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
                  <article className="post">
                    <div className="post-preview overflow-hidden">
                      <a><img src={Sunday} alt="blog-img" className="img-fluid mx-auto d-block rounded" /></a>
                      <div className="tag"><a className="btn btn-custom rounded btn-sm"><i className="fas fa-tag mr-2" /> Investment</a></div>
                    </div>{/*end img*/}
                    <div className="post-content-1 bg-white rounded shadow p-4 position-relative">
                      
                      <ul className="post-meta list-unstyled list-inline mb-3">
                        <li className="list-inline-item"><i className="far fa-calendar-check mr-2" />May 19th, 2020</li>
                      </ul>
                      
                      <h4 className="mb-3"><a className="news-title text-center">ARISE FEATURES;</a></h4>
                     
                      <p className="text-black mb-0">
                      ●The emphasis is to skill the youths in such a way that they get employment and also improve common sense.<br/>
                      ●Provides training, support and guidance against the after effect of COVID 19 VIRUS,<br/>
                      ●More emphasis will be given on various other sectors, where skill development is inadequate or nil.<br/>
                      <ReadMore>
                      The training programmes would be on the lines of international level so that the youths of our country can not only meet the domestic demands but also of other countries with limited labor power.<br/>
                      ●We look to improve positive thinking skills, personality development skills, management skills, behavioural skills, including job and employability skills.<br/>
                      The course methodology of "ARISE" would be innovative, which would include group  discussions brainstorming sessions, practical experiences, case studies etc.<br/>
                      ●Importance of NSE and NSBE to all engineers and engineering students
                      In this time of uncertainty, it is certain that career certainty should be firmly certain, but let's take the first step of certainty together to eradicate uncertainties from our future and our beloved Nation Nigeria.<br/>
                   </ReadMore> 
                   </p>
                     
                     </div>{/*end post content*/} 
                   
                  </article>{/*end post*/}
                </div>{/*end col*/}

              </div>
            </div>
          </div>
          {/*End News*/}

        </section>
      </React.Fragment>
    )
  }

  export default withRouter(SpecialAnnouncement);
