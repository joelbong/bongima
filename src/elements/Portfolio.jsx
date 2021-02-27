import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import PageHelmet from "../component/common/Helmet";
import { slickDot } from "../page-demo/script";
import Breadcrumb from "../elements/common/Breadcrumb";
import {PortfolioListContent} from "../elements/portfolio/PortfolioList";

class Portfolio extends Component{
    render(){
        return(
            <>
                <PageHelmet pageTitle='Projects' />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Projects'}   />
                {/* End Breadcrump Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center mb--15">
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {PortfolioListContent.map((value , index) => (
                                                <div className="portfolio text-center mt--40" key={index}>
                                                    <Link to={`/projects/${value.title}`}>
                                                        <div className="thumbnail-inner">
                                                            <div className={`thumbnail ${value.image}`}></div>
                                                            <div className={`bg-blr-image ${value.image}`}></div>
                                                        </div>
                                                    </Link>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4>{value.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}
            </>
        )
    }
}
export default Portfolio;