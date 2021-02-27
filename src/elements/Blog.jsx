import React, { Component } from "react";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";

class Blog extends Component{
    render(){
        return(
            <>
                <PageHelmet pageTitle='Blog' />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Blog List'}   />
                {/* End Breadcrump Area */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                        <BlogList />
                        <div className="row mt--20">
                            <div className="col-lg-12">
                                {/* Start Pagination Area */}
                                <Pagination />
                                {/* End Pagination Area */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
            </>
        )
    }
}
export default Blog;
