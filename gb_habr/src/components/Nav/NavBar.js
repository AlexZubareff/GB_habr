import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logaut, selectIsAuth } from '../../redux/slices/auth';
import { fetchArticles } from '../../redux/slices/articles';

import axios from '../../axios';




export default function NavBar() {
  const navigate = useNavigate();

const dispatch = useDispatch();

const isAuth = useSelector(selectIsAuth);
const [data, setData] = React.useState();
const [isLoading, setLoading] = React.useState(true);
const userData = useSelector((state) => state.auth.data);
console.log(isAuth);
console.log(userData);


// const user_id = userData.user.id;
// console.log(user_id);



React.useEffect(() => {
  axios
    .get(`/category`)
    .then((res) => {
        setData(res.data);
        setLoading(false);
        
    })
}, []);

// const userRole = userData.user.role_id;
console.log(data);

const onClickLogaut = () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    dispatch(logaut());
    dispatch(fetchArticles());
    window.localStorage.removeItem('token');
  }
};




if (isLoading) {
  return "Loading..."
  // <FullArticle 
  // isLoading = {isLoading}
  // />
}
// console.log(userData.user.id);
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
                  {data.map(elem => 
                     <li className="nav-item">
                     <Link className="nav-link" to={`/category/${elem.id}`}>
                         {elem.name}
                       </Link>
                     </li>
                  )}
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="/category">
                        ДИЗАЙН
                      </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/category">
                        ВЕБ-РАЗРАБОТКА
                      </Link>
                    </li>

                    <li className="nav-item ">
                    <Link className="nav-link" to="/category">
                        МОБИЛЬНАЯ РАЗРАБОТКА
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category">
                        МАРКЕТИНГ
                      </Link>
                    </li> */}

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

                          {/* <img src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/> */}
                          <img src={userData.user.avatar} alt="author-image" width="25" height="25"/>

                        </Link>
                        <div className="dropdown-menu">
                        {/* <img className="ml-3" src={userData.user.avatar ? userData.user.avatar : "../images/news/author_no_avatar.png" } alt="author-image" width="25" height="25"/> */}
                        <img className="ml-3" src={userData.user.avatar} alt="author-image" width="25" height="25"/>
                        
                        <div className="ml-3">{userData.user.name}</div>

                          <Link className="dropdown-item" to="/user/articles">Ваши Статьи</Link>
                          <Link className="dropdown-item" to="/register">Коментарии</Link>
                          <Link className="dropdown-item" to="/login">Как стать автором</Link>
                          <Link className="dropdown-item" to={`/user/profile/${userData.user.id}`}>Профиль</Link>
                          <Link className="dropdown-item" to="/admin/article">Админ панель</Link>
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
                          <Link className="dropdown-item" to={`/user/profile/${userData.user.id}`}>Профиль</Link>
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

