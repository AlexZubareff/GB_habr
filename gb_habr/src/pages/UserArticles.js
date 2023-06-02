import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";


export function userArticles() {


    return (
        <>
        <Header />
        <NavBar />

            <section className="block-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
                            <div className="sidebar sidebar-left">
                                <div className="widget">
                                    <h3 className="news-title">
                                        <span>Stay in touch</span>
                                    </h3>
                                    <h3 className="news-title">
                                        <span>Hot News</span>
                                    </h3>
                                    <h3 className="news-title">
                                        <span>Hot News</span>
                                    </h3>

                                    <div className="widget">
                                        <h3 className="news-title">
                                            <span>Hot News</span>
                                        </h3>

                                        <div className="post-overlay-wrapper">
                                            <div className="post-thumbnail">
                                                <img className="img-fluid" src="images/news/news-15.jpg" alt="post-thumbnail" />
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
                                                        <img className="img-fluid" src="images/news/news-03.jpg" alt="post-thumbnail" />
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
                                                        <img className="img-fluid" src="images/news/news-05.jpg" alt="post-thumbnail" />
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
                                                        <img className="img-fluid" src="images/news/news-11.jpg" alt="post-thumbnail" />
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
                                                        <img className="img-fluid" src="images/news/news-06.jpg" alt="post-thumbnail" />
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
                                    <div className="widget">
                                        <img className="banner img-fluid" src="images/banner-ads/ad-sidebar.png" alt="300x300 ads" />
                                    </div>
                                    <div className="widget mb-0">
                                        <h3 className="news-title">
                                            <span>Newsletter</span>
                                        </h3>
                                        <div className="ts-newsletter">
                                            <div className="newsletter-introtext">
                                                <h4>Get Updates</h4>
                                                <p>Subscribe our newsletter to get the best stories into your inbox!</p>
                                            </div>

                                            <div className="newsletter-form">
                                                <form action="#" method="post">
                                                    <div className="form-group">
                                                        <input type="email" name="email" id="newsletter-form-email" className="form-control form-control-lg" placeholder="E-mail" autocomplete="off" />
                                                        <button className="btn btn-primary">Subscribe</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <div className="post-block-wrapper post-float">
                                    <div className="post-thumbnail">
                                        <Link to="single-post.html">
                                            <img className="img-fluid" src="images/news/news-05.jpg" alt="post-thumbnail" />
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
                <div className="mt-2">
                            <button className="btn btn-primary mr-2" type="submit">Редактировать</button>
                            <button type="button" class="btn btn-danger">Удалить</button>
                </div>
                            </div>

                    </div>
                </div>
            </section>


        <Footer />

        </>
    )
}