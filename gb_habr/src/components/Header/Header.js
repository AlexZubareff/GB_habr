import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
<div className="trending-bar-dark hidden-xs">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                {/* <h3 className="trending-bar-title">Trending News</h3>
                <div className="trending-news-slider">
                    <div className="item">
                        <div className="post-content">
                            <h2 className="post-title title-sm">
                                <Link to="single-post.html">Ex-Googler warns coding bootcamps are lacking</Link>
                            </h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="post-content">
                            <h2 className="post-title title-sm">
                                <Link to="single-post.html">Intel’s new smart glasses actually look good</Link>
                            </h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="post-content">
                            <h2 className="post-title title-sm">
                                <Link to="single-post.html" >Here's How To Get Free Pizza On 2 hour</Link>
                            </h2>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className="col-md-12 col-sm-12 col-xs-12 top-nav-social-lists text-lg-right col-lg-4 ml-lg-auto">
                <ul className="list-unstyled mt-4 mt-lg-0">
                    <li>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-facebook-f"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-twitter"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-google-plus"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-youtube"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-linkedin"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-pinterest-p"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-rss"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-github"></i>
                            </span>
                        </Link>
                        <Link to="#">
                            <span className="social-icon">
                                <i className="fa fa-reddit-alien"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>


        </>
      
    )
}