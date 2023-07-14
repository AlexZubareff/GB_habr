import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavBar from '../components/Nav/NavBar';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logaut, selectIsAuth } from '../redux/slices/auth';
import axios from '../axios';

export function Category() {

    const isAuth = useSelector(selectIsAuth);
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const userData = useSelector((state) => state.auth.data);
    const {id} = useParams();
    console.log(id);
    console.log(isAuth);
    console.log(userData);
    
    
    
    React.useEffect(() => {
      axios
        .get(`/posts/category/${id}`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(res.data);
            
        })
    }, [id]);
    
    console.log(data);
    
    
    
    
    
    if (isLoading) {
      return "Loading..."
    }
    





    return (
        <>
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="block category-listing category-style2">
                                <h3 className="news-title"><span>{data[0].Articles_Category.name}</span></h3>

                                {data.map(elem => 
                                <>
                                        <div className="post-block-wrapper post-list-view clearfix">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-6">
                                                    <div className="post-thumbnail thumb-float-style">
                                                        <Link to={`/article/${elem.id}`}>
                                                            <img className="img-fluid" src={elem.imageUrl} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 col-sm-6">
                                                    <div className="post-content">
                                                        <div className="post-meta">
                                                            <span>
                                                                <i className="fa fa-clock-o"></i>
                                                                <Link href="single-post.html#comments">{elem.created_at.slice(0,10)}</Link>
                                                            </span>

                                                            <span className="post-author">
                                                                <Link href="author.html" className="text-dark">{elem.User.name}</Link>
                                                            </span>
                                                        </div>
                                                        <h2 className="post-title title-large ">
                                                            <Link href="single-post.html">{elem.title}</Link>
                                                        </h2>


                                                        <p>
                                                            A mobile app without motion is just a sequence of independent screens. But when designers introduce motion.
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </>
                                
                                )}


                            </div>
                            <nav aria-label="pagination-wrapper" className="pagination-wrapper">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item active">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-angle-double-left mr-2"></i></span>
                                            <span className="">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span className="">Next</span>
                                            <span aria-hidden="true"><i className="fa fa-angle-double-right ml-2"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="sidebar sidebar-right">
                                <div className="widget">
                                    <h3 className="news-title">
                                        <span>Stay in touch</span>
                                    </h3>

                                    <ul className="list-inline social-widget">
                                        <li className="list-inline-item">
                                            <Link className="social-page youtube" href="#">
                                                <i className="fa fa-play"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="social-page facebook" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="social-page twitter" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="social-page pinterest" href="#">
                                                <i className="fa fa-pinterest"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link className="social-page linkedin" href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link className="social-page youtube" href="#">
                                                <i className="fa fa-youtube"></i>
                                            </Link>
                                        </li>

                                    </ul>

                                </div>
                                <div className="widget">
                                    <h3 className="news-title">
                                        <span>Top Authors</span>
                                    </h3>
                                    <div className="post-list-block">
                                        <div className=" review-post-list">
                                            <div className="top-author">
                                                <img src="images/news/author-01.jpg" alt="author-thumb" />
                                                    <div className="info">
                                                        <h4 className="name"><Link href="author.html">Jack Rockshow</Link></h4>
                                                        <ul className="list-unstyled">
                                                            <li>37 Posts</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-02.jpg" alt="author-thumb" />
                                                    <div className="info">
                                                        <h4 className="name"><Link href="author.html">Lint Handson</Link></h4>
                                                        <ul className="list-unstyled">
                                                            <li>28 Posts</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-03.jpg" alt="author-thumb" />
                                                    <div className="info">
                                                        <h4 className="name"><Link href="author.html">Ronny Robeen</Link></h4>
                                                        <ul className="list-unstyled">
                                                            <li>19 Posts</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-02.jpg" alt="author-thumb" />
                                                    <div className="info">
                                                        <h4 className="name"><Link href="author.html">Handson</Link></h4>
                                                        <ul className="list-unstyled">
                                                            <li>18 Posts</li>
                                                        </ul>
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
                </div>
            </section>

        </>
    )
}
