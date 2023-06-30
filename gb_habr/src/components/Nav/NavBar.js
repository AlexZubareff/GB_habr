import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logaut, selectIsAuth } from '../../redux/slices/auth';




export default function NavBar() {
const dispatch = useDispatch();
const isAuth = useSelector(selectIsAuth);
const userData = useSelector((state) => state.auth.data);
console.log(isAuth);
console.log(userData);



// const userRole = userData.user.role_id;


const onClickLogaut = () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    dispatch(logaut());
    window.localStorage.removeItem('token');
  }
};


  return (
    <>
      <div className="main-navbar clearfix bg-dark ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg site-main-nav navigation">
                <Link className="navbar-brand d-lg-none" to="/">
                  <img src="images/logos/footer-logo.png" alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Home
                      </Link>
                      <div className="dropdown-menu" >
                        <Link className="dropdown-item" to="/" >Home 1</Link>
                        <Link className="dropdown-item" to="/">Home 2</Link>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Post
                      </Link>
                      <div className="dropdown-menu" >
                        <Link className="dropdown-item" to="post-left-sidebar.html">Post Left Sidebar</Link>
                        <Link className="dropdown-item" to="post-full-width.html">Post Full Width</Link>
                        <Link className="dropdown-item" to="single-post.html">Single Post</Link>
                        <Link className="dropdown-item" to="post-category-1.html">Category 1</Link>
                        <Link className="dropdown-item" to="post-category-2.html">Category 2</Link>
                        <Link className="dropdown-item" to="author.html">Author</Link>
                      </div>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">Log In</Link>
                        <Link className="dropdown-item" to="signup.html">Register</Link>
                      </div>
                    </li> */}

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="about.html">About</Link>
                        <Link className="dropdown-item" to="terms.html">Terms</Link>
                        <Link className="dropdown-item" to="privacy.html">Privacy Policy</Link>
                        <Link className="dropdown-item" to="job.html">Career</Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="404.html">404 Page</Link>
                        <Link className="dropdown-item" to="search.html">Search Page</Link>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="contact.html">Contact</Link>
                    </li>

                  </ul>
                    {/* <input type="email" name="email" id="newsletter-form-email" className="form-control form-control-lg" placeholder="E-mail" autocomplete="off" /> */}
                    


                  <div className="nav-search ml-auto d-none d-lg-block">
                  { isAuth ? ( userData.user.role_id === 3 ? (
                    <>
                        <ul className="navbar-nav mr-auto">
                        <Link className="nav-link" to="/article/create"> <i className="fa fa-pencil fa-lg text-light" aria-hidden="true"></i></Link>
                        <Link className="nav-link" to="/"><i onClick={onClickLogaut} className="fa fa-arrow-right fa-lg text-light" aria-hidden="true"></i></Link>
                        <li className="nav-item" id="search">
                        <Link className="nav-link" id="search"><i className="fa fa-search fa-lg text-light"></i></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {/* <i className="fa fa-user fa-lg text-light"></i> */}

                          <img src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/>
                        </Link>
                        <div className="dropdown-menu">
                        <img className="ml-3" src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/>
                        <div className="ml-3">{userData.user.name}</div>

                          <Link className="dropdown-item" to="/user/articles">Ваши Статьи</Link>
                          <Link className="dropdown-item" to="/register">Коментарии</Link>
                          <Link className="dropdown-item" to="/login">Как стать автором</Link>
                          <Link className="dropdown-item" to="/register">Профиль</Link>
                          <Link className="dropdown-item" to="/register">Админ панель</Link>
                        </div>
                      </li>

                        </ul>
                      </>
                  ) : (
                      <>
                        {/* <Link to="/article/create"><button className="btn btn-primary mr-2">Write Article</button></Link>
                        <Link to="/"><button onClick={onClickLogaut} className="btn btn-primary">Exit</button></Link> */}
                        
                        <ul className="navbar-nav mr-auto">
                        <Link className="nav-link" to="/article/create"> <i className="fa fa-pencil fa-lg text-light" aria-hidden="true"></i></Link>
                        <Link className="nav-link" to="/"><i onClick={onClickLogaut} className="fa fa-arrow-right fa-lg text-light" aria-hidden="true"></i></Link>
                        <li className="nav-item" id="search">
                        <Link className="nav-link" id="search"><i className="fa fa-search fa-lg text-light"></i></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {/* <i className="fa fa-user fa-lg text-light"></i> */}

                          <img src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/>
                        </Link>
                        <div className="dropdown-menu">
                        <img className="ml-3" src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/>
                        <div className="ml-3">{userData.user.name}</div>

                          <Link className="dropdown-item" to="/user/articles">Ваши Статьи</Link>
                          <Link className="dropdown-item" to="/register">Коментарии</Link>
                          <Link className="dropdown-item" to="/login">Как стать автором</Link>
                          <Link className="dropdown-item" to="/register">Профиль</Link>
                        </div>
                      </li>

                        </ul>
                      </>
                  )
                     ) : (
                      <>
                  <div className="nav-search ml-auto d-none d-lg-block">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item" id="search">
                        <Link className="nav-link"><i className="fa fa-search fa-lg text-light"></i></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       
                          <i className="fa fa-user fa-lg text-light"></i>
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="/login">Log In</Link>
                          <Link className="dropdown-item" to="/register">Register</Link>
                        </div>
                      </li>
                    </ul>
                  </div>

                      {/* <Link to="/login"><button className="btn btn-primary mr-2">Log in</button></Link>
                      <Link to="/register"><button className="btn btn-primary">Register</button></Link> */}
                      </>
                     )

                    }


                  </div>
                </div>
              </nav>

            </div>
          </div>
        </div>
        <form className="site-search" method="get">
          <input type="text" id="searchInput" name="site_search" placeholder="Enter Keyword Here..." autofocus="" />
          <div className="search-close">
            <span className="close-search">
              <i className="fa fa-times"></i>
            </span>
          </div>
        </form>
      </div>
      
    </>
  )
}

