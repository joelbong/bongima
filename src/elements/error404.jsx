import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class error404 extends Component {
    
    render() {
        return (
            <>
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Page not found</h3>
                                    <span>The page you were looking for could not be found.</span>
                                    <div className="error-button">
                                        <Link className="rn-button-style--2 btn-solid" to="/">Back To Homepage</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

            </>
        )
    }
}
export default error404;
