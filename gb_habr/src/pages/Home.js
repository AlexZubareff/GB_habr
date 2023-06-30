import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import NavBar from '../components/Nav/NavBar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../redux/slices/articles';
import Article from '../components/Articles/Article';
import { TopAuthor } from '../components/Author/TopAuthor';
import HotNews from '../components/News/HotNews';
import ImageGrid from '../components/Loading/RecentArticlesLoading';




export function Home() {
const dispatch = useDispatch();
const {articles} = useSelector(state => state.articles);

const isArticlesLoading = articles.status === 'loading';

React.useEffect(() => {
    // axios.get('/posts');
dispatch(fetchArticles());

}, []);

console.log (articles);


    return(
    <>
            {/* <div className="trending-bar-dark hidden-xs">
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
            </div> */}

            <Header />
            <NavBar />

            {/* <div className="py-30"></div> */}
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="all-news-block">
                                <h3 className="news-title">

                                    <span>Latest Articles</span>
                                </h3>
                                <div className="all-news">
                                    <div className="row">
                                        {(isArticlesLoading ? [...Array(1)] : articles.items).map((elem, index) =>
                                            isArticlesLoading ? (
                                                <ImageGrid />
                                            ) : (

                                                <Article
                                                    id={elem.id}
                                                    title={elem.title}
                                                    user={elem.user}
                                                    viewsCount={elem.viewsCount}
                                                    imageUrl={elem.imageUrl}
                                                    tags={elem.tags}
                                                    commentsCount={elem.Comments.length}
                                                />

                                            ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <HotNews />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="all-news-block">
                                <h3 className="news-title">
                                    <span>Most Popular</span>
                                </h3>
                                <div className="all-news">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="post-block-wrapper post-float-half clearfix">
                                                <div className="post-thumbnail">
                                                    <Link to="single-post.html">
                                                        <img className="img-fluid" src="images/news/news-01.jpg" alt="post-thumbnail" />
                                                    </Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link className="post-category" to="post-category-2.html">Google</Link>
                                                    <h2 className="post-title mt-3">
                                                        <Link to="single-post.html">Ex-Googler warns coding bootcamps are lacking</Link>
                                                    </h2>
                                                    <div className="post-meta">
                                                        <span className="posted-time">an hour ago</span>
                                                        <span className="post-author">by
                                                            <Link to="author.html">John Snow</Link>
                                                        </span>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque, aliquid accusamus
                                                        soluta!...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="post-block-wrapper post-float-half clearfix">
                                                <div className="post-thumbnail">
                                                    <Link to="single-post.html">
                                                        <img className="img-fluid" src="images/news/news-12.jpg" alt="post-thumbnail" />
                                                    </Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link className="post-category" to="post-category-2.html">Health</Link>
                                                    <h2 className="post-title mt-3">
                                                        <Link to="single-post.html">Today Is the Day Most People Quit Their New Year's Party</Link>
                                                    </h2>
                                                    <div className="post-meta">
                                                        <span className="posted-time">4 hours ago</span>
                                                        <span className="post-author">by
                                                            <Link to="author.html">Rimmon Ronnick</Link>
                                                        </span>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis blanditiis hic
                                                        cumque excepturi...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="pagination-wrapper" className="pagination-wrapper">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item active">
                                        <Link className="page-link" to="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-angle-double-left mr-2"></i></span>
                                            <span className="">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Next">
                                            <span className="">Next</span>
                                            <span aria-hidden="true"><i className="fa fa-angle-double-right ml-2"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
                            <div className="sidebar sidebar-right">
                                <div className="widget">
                                    <h3 className="news-title">
                                        <span>Top Authors</span>
                                    </h3>
                                    <div className="post-list-block">
                                        <div className=" review-post-list">
                                            <div className="top-author">
                                                <img src="images/news/author-01.jpg" alt="author-thumb" />
                                                <div className="info">
                                                    <h4 className="name"><Link to="author.html">Jack Rockshow</Link></h4>
                                                    <ul className="list-unstyled">
                                                        <li>37 Posts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-02.jpg" alt="author-thumb" />
                                                <div className="info">
                                                    <h4 className="name"><Link to="author.html">Lint Handson</Link></h4>
                                                    <ul className="list-unstyled">
                                                        <li>28 Posts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-03.jpg" alt="author-thumb" />
                                                <div className="info">
                                                    <h4 className="name"><Link to="author.html">Ronny Robeen</Link></h4>
                                                    <ul className="list-unstyled">
                                                        <li>19 Posts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="top-author">
                                                <img src="images/news/author-02.jpg" alt="author-thumb" />
                                                <div className="info">
                                                    <h4 className="name"><Link to="author.html">Handson</Link></h4>
                                                    <ul className="list-unstyled">
                                                        <li>18 Posts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
