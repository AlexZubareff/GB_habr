import React from 'react';
import Header from '../components/Header/Header'
import NavBar from '../components/Nav/NavBar';
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom';

export function About() {

return (
    <>
<div className="trending-bar-dark hidden-xs">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h3 className="trending-bar-title">Trending News</h3>
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
                </div>
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
<Header />
<NavBar />

<div className="breadcrumb-wrapper">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <ol className="breadcrumb">
                    <li>
                        <Link to="index.html">Home</Link>
                    </li>
                    <li>About</li>
                </ol>
            </div>
        </div>
    </div>
</div>


<section className="section-padding">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-6">
				<h2 className="mb-4">Our History</h2>
				<p>We understand the challenges, goals and dynamics that come with building a brand, launching products and generating leads that help grow your business. Find out more about our capabilities, products and previous partnerships.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi provident quis optio fugiat, harum sint. Labore animi esse quae, cumque molestias deserunt inventore optio soluta dicta minima placeat, vel suscipit?</p>
			</div>
			<div className="col-lg-6 col-md-6">
				<img src="images/news/news-02.jpg" alt="" className="img-fluid rounded" />			
			</div>
		</div>

		<div className="row mt-5">
			<div className="col-lg-6 col-md-6">
				<img src="images/news/news-03.jpg" alt="" className="img-fluid rounded" />			
			</div>
			<div className="col-lg-6 col-md-6">
				<h2 className="mb-4">Our Mission</h2>
				<p>We understand the challenges, goals and dynamics that come with building a brand, launching products and generating leads that help grow your business. Find out more about our capabilities, products and previous partnerships.</p>
				<ul className="info-list">
					<li>Building a brand</li>
					<li>Launching products and generating leads</li>
					<li>The challenges, goals and dynamics</li>
					<li>Find out more about our capabilities</li>
				</ul>
				
			</div>
		</div>
	</div>
</section>


<section className="section-padding">
	<div className="container">
		<div className="row">
			<div className="col-lg-8">
				<div className="mb-5">
					<h2>Our honorable members</h2>
					<p>Team works that bind us together to get a good result.</p>
				</div>
			</div>
		</div>


		<div className="row">
			<div className="col-lg-4 col-md-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/team-1.jpg" alt="" className="img-fluid rounded" />

					<div className="team-content mt-4">
						<h3 className="title-large">Mark Jason</h3>
						<p>CEO of newsbit</p>

						<p>Minima, sapiente nostrum incidunt nisi quidem voluptatem voluptatibus itaque ex!</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4  col-md-6">
				<div className="team-block mb-5 mb-lg-0">
					<img src="images/team/team-2.jpg" alt="" className="img-fluid rounded" />

					<div className="team-content mt-4">
						<h3 className="title-large">Jessica roy</h3>
						<p>Senior Cheif Editor</p>

						<p>Minima, sapiente nostrum incidunt nisi quidem voluptatem voluptatibus itaque ex!</p>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="team-block">
					<img src="images/team/team-3.jpg" alt="" className="img-fluid rounded" />

					<div className="team-content mt-4">
						<h3 className="title-large">Hasi watson</h3>
						<p>Junior Editor</p>

						<p>Minima, sapiente nostrum incidunt nisi quidem voluptatem voluptatibus itaque ex!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer />
</>
)
}

