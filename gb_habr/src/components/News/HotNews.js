import React from "react";
import { Link } from 'react-router-dom';


export default function HotNews() {
    return (

        <div className="sidebar">

        <div className="widget">
            <h3 className="news-title">
                <span>Hot News</span>
            </h3>

            <div className="post-overlay-wrapper">
                <div className="post-thumbnail">
                    <img className="img-fluid" src="../images/news/news-15.jpg" alt="post-thumbnail" />
                </div>
                <div className="post-content">
                    <Link className="post-category white" to="post-category-1.html">Fashion</Link>
                    <h2 className="post-title">
                        <Link to="single-post.html">First Look At Self-Portrait's Autumn Collection...</Link>
                    </h2>
                    <div className="post-meta white">
                        <span className="posted-time"><i className="fa fa-clock-o mr-1"></i>17 jun,2019</span>
                        <span> by </span>
                        <span className="post-author">
                            <Link to="author.html">Jammy Anderson</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="post-list-block">
                <div className="post-block-wrapper post-float ">
                    <div className="post-thumbnail">
                        <Link to="single-post.html">
                            <img className="img-fluid" src="../images/news/news-03.jpg" alt="post-thumbnail" />
                        </Link>
                    </div>
                    <div className="post-content">
                        <h2 className="post-title title-sm">
                            <Link to="single-post.html">Apple HomePod review: locked in</Link>
                        </h2>
                        <div className="post-meta">
                            <span className="posted-time"><i className="fa fa-clock-o mr-1"></i>2 hours ago</span>
                        </div>
                    </div>
                </div>
                <div className="post-block-wrapper post-float">
                    <div className="post-thumbnail">
                        <Link to="single-post.html">
                            <img className="img-fluid" src="../images/news/news-05.jpg" alt="post-thumbnail" />
                        </Link>
                    </div>
                    <div className="post-content">
                        <h2 className="post-title title-sm">
                            <Link to="single-post.html">Intel’s new smart glasses actually look good</Link>
                        </h2>
                        <div className="post-meta">
                            <span className="posted-time"><i className="fa fa-clock-o mr-1"></i> 15 March , 2019</span>
                        </div>
                    </div>
                </div>
                <div className="post-block-wrapper post-float">
                    <div className="post-thumbnail">
                        <Link to="single-post.html">
                            <img className="img-fluid" src="../images/news/news-11.jpg" alt="post-thumbnail" />
                        </Link>
                    </div>

                    <div className="post-content">
                        <h2 className="post-title title-sm">
                            <Link to="single-post.html">Free Two-Hour Delivery From Whole Foods</Link>
                        </h2>
                        <div className="post-meta">
                            <span className="posted-time"><i className="fa fa-clock-o mr-1"></i> 5 hours ago</span>
                        </div>
                    </div>
                </div>
                <div className="post-block-wrapper post-float">
                    <div className="post-thumbnail">
                        <Link to="single-post.html">
                            <img className="img-fluid" src="../images/news/news-06.jpg" alt="post-thumbnail" />
                        </Link>
                    </div>

                    <div className="post-content">
                        <h2 className="post-title title-sm">
                            <Link to="single-post.html">Here's How To Get Free Pizza On</Link>
                        </h2>
                        <div className="post-meta">
                            <span className="posted-time"><i className="fa fa-clock-o mr-1"></i> 17 June, 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}