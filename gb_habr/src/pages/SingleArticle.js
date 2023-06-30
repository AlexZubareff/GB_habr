import React from "react";
import {useParams, Link} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AuthorBlock } from "../components/Author/AuthorBlock";
import axios from '../axios';
import FullArticle from "../components/Articles/FullArticle";
import HotNews from "../components/News/HotNews";
import NavBar from "../components/Nav/NavBar";
import Comment from "../components/Comment/Comment";
import AddComment from "../components/Comment/AddComment";

import { selectIsAuth } from '../redux/slices/auth';
import { useSelector } from 'react-redux';




export function SingleArticle() {

    const isAuth = useSelector(selectIsAuth);
    console.log(isAuth);
    const [data, setData] = React.useState();

    const [isLoading, setLoading] = React.useState(true);
    const {id} = useParams();

    console.log(id);

    React.useEffect(() => {
      axios
        .get(`/posts/${id}`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(res.data.User);
            console.log(res.data.Comments);
        })
    }, [id]);

  


    // console.log(data);

    if (isLoading) {
        return <FullArticle 
        isLoading = {isLoading}
        />
    }

    return (
        <>
            <div className="trending-bar-dark hidden-xs">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-6">
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
                        </div> */}


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
            <section className="single-block-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <FullArticle 
                             title={data.title}
                             text={data.text}
                            tags={data.tags}
                            imageUrl={data.imageUrl}
                            
                            />
                            {/* <div className="single-post">
                                <div className="post-header mb-5">
                                    <Link className="post-category" to="post-category-1.html">Health</Link>
                                    <h2 className="post-title">
                                        {data.title}
                                    </h2>
                                    <p>It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of our captivity was the ample time it gave him for the improvisation of prayers</p>
                                </div>
                                <div className="post-body">
                                    <div className="post-featured-image">
                                        <img src="images/news/img-2.jpg" className="img-fluid" alt="featured-image" />
                                    </div>
                                    <div className="entry-content">
                                        <p>
                                            It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him. The Sagoths had begun to take notice of his habit of declaiming throughout entire marches. One of them asked him what he was saying—to whom he was talking. The question gave me an idea, so I answered quickly before Perry could say anything.
                                        </p>
                                        <h2>Perfect design & code delivered to you</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellat sapiente neque iusto praesentium adipisci itaque error, commodi laborum doloremque. Esse?
                                        </p>
                                        <div className="media mb-4 single-media">
                                            <img src="images/news/img-1.jpg" alt="post-ads" className="img-fluid mr-4" />
                                                <div className="media-body">
                                                    <p>
                                                        Oblique facilisi vix ei, quo ignota appetere lucilius at. Apeirian voluptatibus ius ei, an periculis imperdiet consequat sea. His ea everti placerat. Ad mea utroque convenire, an quo reque aperiam, has et unum cibo adipiscing. Brute instructior te vix, consequat definitiones conclusionemque et usu, et per idque quaerendum. Id pro ridens appareat, vim in verear pertinacia.
                                                    </p>
                                                </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum delectus exercitationem
                                            natus quidem enim error suscipit. Iure cupiditate nobis quaerat consectetur! Vero aliquam,
                                            amet ipsum ullam reiciendis nostrum voluptate accusantium provident ut blanditiis incidunt.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab ratione animi nobis in et consequatur
                                            earum modi repellendus, qui, non debitis pariatur tempora consequuntur!
                                        </p>
                                    </div>

                                    <div className="share-block  d-flex justify-content-between align-items-center border-top border-bottom mt-5">
                                        <div className="post-tags">
                                            <span>Tags</span>
                                            <Link to="post-category-2.html">Health</Link>
                                            <Link to="post-category-2.html">Game</Link>
                                            <Link to="post-category-2.html">Tour</Link>
                                        </div>

                                        <ul className="share-icons list-unstyled ">
                                            <li className="facebook">
                                                <Link to="#">
                                                    <i className="fa fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li className="twitter">
                                                <Link to="#">
                                                    <i className="fa fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li className="gplus">
                                                <Link to="#">
                                                    <i className="fa fa-google-plus"></i>
                                                </Link>
                                            </li>
                                            <li className="pinterest">
                                                <Link to="#">
                                                    <i className="fa fa-pinterest"></i>
                                                </Link>
                                            </li>
                                            <li className="reddit">
                                                <Link to="#">
                                                    <i className="fa fa-reddit-alien"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            {/* <nav className="post-navigation clearfix">
                                <div className="previous-post">
                                    <Link to="single-post.html">
                                        <h6 className="text-uppercase">Next</h6>
                                        <h3>
                                            Intel’s new smart glasses actually look good
                                        </h3>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="single-post.html">
                                        <h6 className="text-uppercase">Previous</h6>

                                        <h3>
                                            Free Two-Hour Delivery From Whole Foods
                                        </h3>
                                    </Link>
                                </div>
                            </nav> */}

                            <AuthorBlock 
                            avatar={data.User.avatar}
                            name={data.User.name}
                            // user={elem.user}
                            // viewsCount={elem.viewsCount}
                            // imageUrl={elem.imageUrl}
                            // tags={elem.tags}
                            />

                            {/* <div className="related-posts-block">
                                <h3 className="news-title">
                                    <span>Related Posts</span>
                                </h3>
                                <div className="news-style-two-slide">
                                    <div className="item">
                                        <div className="post-block-wrapper clearfix">
                                            <div className="post-thumbnail mb-0">
                                                <Link to="single-post.html">
                                                    <img className="img-fluid" src="../images/news/news-04.jpg" alt="post-thumbnail" />
                                                </Link>
                                            </div>
                                            <Link className="post-category" to="post-category-1.html">Tech</Link>
                                            <div className="post-content">
                                                <h2 className="post-title title-sm">
                                                    <Link to="single-post.html">Intel’s new smart glasses actually look good</Link>
                                                </h2>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="post-block-wrapper clearfix">
                                            <div className="post-thumbnail mb-0">
                                                <Link to="single-post.html">
                                                    <img className="img-fluid" src="../images/news/news-10.jpg" alt="post-thumbnail" />
                                                </Link>
                                            </div>
                                            <Link className="post-category" to="post-category-1.html">Food</Link>
                                            <div className="post-content">
                                                <h2 className="post-title title-sm">
                                                    <Link to="single-post.html">Free Two-Hour Delivery From Whole Foods</Link>
                                                </h2>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="post-block-wrapper clearfix">
                                            <div className="post-thumbnail mb-0">
                                                <Link to="single-post.html">
                                                    <img className="img-fluid" src="../images/news/news-11.jpg" alt="post-thumbnail" />
                                                </Link>
                                            </div>
                                            <Link className="post-category" to="post-category-1.html">Tour</Link>
                                            <div className="post-content">
                                                <h2 className="post-title title-sm">
                                                    <Link to="single-post.html">Snow and Freezing Rain in Paris Forces the</Link>
                                                </h2>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="post-block-wrapper clearfix">
                                            <div className="post-thumbnail mb-0">
                                                <Link to="single-post.html">
                                                    <img className="img-fluid" src="../images/news/news-18.jpg" alt="post-thumbnail" />
                                                </Link>
                                            </div>
                                            <Link className="post-category" to="post-category-1.html">Beauty</Link>
                                            <div className="post-content">
                                                <h2 className="post-title title-sm">
                                                    <Link to="single-post.html">The Best Eye Makeup Tutorials for all</Link>
                                                </h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div id="comments" className="comments-block block">
                                <h3 className="news-title">
                                    <span>{data.Comments.length} Comments</span>
                                </h3>
                                <ul className="all-comments">
                                    <li>

                                        <Comment 
                                        article_id = {id}
                                        />
                                        {/* <div className="comment">
                                            <img className="commented-person" alt="" src="../images/news/author-01.jpg" />
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <span className="commented-person-name">Jack Anderson</span>
                                                        <span className="comment-hour d-block"><i className="fa fa-clock-o mr-2"></i>February 6, 2019 at 12:20 pm</span>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>
                                                           Hello
                                                        </p>
                                                    </div>
                                                    <div className="text-left">
                                                        <Link className="comment-reply" to="#"><i className="fa fa-reply"></i> Reply</Link>
                                                    </div>
                                                </div>
                                        </div>
                                        <ul className="comments-reply">
                                            <li>
                                                <div className="comment">
                                                    <img className="commented-person" alt="" src="../images/news/author-02.jpg" />
                                                        <div className="comment-body">
                                                            <div className="meta-data">
                                                                <span className="commented-person-name">Jhonny American</span>
                                                                <span className="comment-hour d-block"><i className="fa fa-clock-o mr-2"></i>March 9, 2019 at 12:20 pm</span>
                                                            </div>
                                                            <div className="comment-content">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui expedita magnam ea
                                                                    tempora consectetur fugit dolorum numquam at obcaecati voluptatibus.
                                                                </p>
                                                            </div>
                                                            <div className="text-left">
                                                                <Link className="comment-reply" to="#"><i className="fa fa-reply"></i> Reply</Link>
                                                            </div>
                                                        </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="comment last">
                                            <img className="commented-person" alt="" src="../images/news/author-03.jpg" />
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <span className="commented-person-name">Vicky Fong</span>
                                                        <span className="comment-hour d-block"><i className="fa fa-clock-o mr-2"></i>June 6, 2019 at 12:20 pm</span>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, ipsa dolor exercitationem
                                                            culpa obcaecati illo veniam voluptatem perferendis hic nisi tempora omnis, mollitia unde doloribus.
                                                        </p>
                                                    </div>
                                                    <div className="text-left">
                                                        <Link className="comment-reply" to="#"><i className="fa fa-reply"></i> Reply</Link>
                                                    </div>
                                                </div>
                                        </div> 
                                        */ }
                                    </li>
                                </ul>
                            </div>
                            {isAuth ? (
                                <AddComment />

                                // <div className="comment-form ">
                                //     <h3 className="title-normal">Leave a Reply </h3>
                                //     <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
                                //     <form role="form">
                                //         <div className="row">
                                //             <div className="col-md-12">
                                //                 <div className="form-group">
                                //                     <textarea className="form-control required-field" id="message" placeholder="Messege" rows="8" required></textarea>
                                //                 </div>
                                //             </div>

                                //             <div className="col-md-4">
                                //                 <div className="form-group">
                                //                     <input className="form-control" name="name" id="name" placeholder="Name" type="text" required />
                                //                 </div>
                                //             </div>
                                //             <div className="col-md-4">
                                //                 <div className="form-group">
                                //                     <input className="form-control" name="email" id="email" placeholder="Email" type="email" required />
                                //                 </div>
                                //             </div>
                                //             <div className="col-md-4">
                                //                 <div className="form-group">
                                //                     <input className="form-control" type="text" placeholder="Website" required />
                                //                 </div>
                                //             </div>

                                //             <div className="col-md-12">
                                //                 <button className="comments-btn btn btn-primary " type="submit">Post Comment</button>
                                //             </div>
                                //         </div>
                                //     </form>
                                // </div>
                            
                            ) : (
                                <p>Если Вы хотите оставить комментарий к статье, Вам необходимо авторизоваться!</p>
                            )}

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <HotNews />
                            {/* <div className="sidebar sidebar-right">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

<Footer />
        </>
    )
}