import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slices/auth';
import { Link, Navigate } from "react-router-dom";
import axios from '../axios';
import AllUserArticles from "../components/Articles/AllUserArticle";
import ImageGrid from '../components/Loading/RecentArticlesLoading';


import { fetchAllUserArticles, fetchArticles } from "../redux/slices/articles";
import UserArticlesLoader from "../components/Loading/UserArticlesLoader";
import Error_404 from "../components/Error/error_404";
import AdminUsers from "../components/Admin/AdminUsers";





export function AdminUser() {

const dispatch = useDispatch();
const {articles} = useSelector(state => state.articles);
const userData = useSelector((state)=>state.auth.data);
const [filteredData, setFilteredData] = React.useState(articles.items);
const [users, setUsers] = React.useState();

// const [data, setData] = React.useState();
const [isLoading, setLoading] = React.useState(true);

console.log(userData.user.id);
const userId = userData.user.id;
const isArticlesLoading = articles.status === 'loading';

// React.useEffect(() => {
// dispatch(fetchUserArticles(values));

// }, []);

React.useEffect(() => {
    axios.get('/admin/users')
        .then((res) => {
            setUsers(res.data);
            setLoading(false);
            console.log(res.data);
        })
        .catch(err => {
          console.log(err);
          alert('Ошибка при получении пользователей')
      })
    // dispatch(fetchArticles());
}, []);


// React.useEffect(() => {

//     dispatch(fetchAllUserArticles(userId))

    // axios
    //   .get(`/posts/user/${userId}`)
    //   .then((res) => {
    //       setData(res.data);
    //       setLoading(false);
    //       console.log(res.data);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //       alert('Ошибка при получении статей')
    //   })
//   }, [userId]);
  
  console.log(filteredData.length);
  console.log(filteredData);
  console.log(filteredData);

    const isAuth = useSelector(selectIsAuth);


    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to="/" />
    }

    const filterArticles = (param) => {
        let data = articles.items;
        if(param == '') {
            setFilteredData(data);
        } else {
            let filteredData = data.filter(elem =>
                elem.status == param
            )
            console.log(filteredData);
            setFilteredData(filteredData);
        }


    }

//     React.useEffect(() => {
// dispatch(publishedArticles())
    
//     }, [publishedArticles])
    


    // if (articles.items.length == 0) {
    //     return <Error_404 />
    // } 

    if (isLoading) {
        return <AdminUsers 
        isLoading = {isLoading}
        />
    }
    
    console.log(filteredData);
    console.log(users);

    
    return (
        <>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        { filteredData.length == 0 ? <Error_404 /> :

                        (isArticlesLoading ? [...Array(<UserArticlesLoader />)] : users).map((elem, index) =>
                                            isArticlesLoading ? (
                                                <UserArticlesLoader />
                                            ) : (
                                                <AdminUsers
                                                    id={elem.id}
                                                    name={elem.name}
                                                    email={elem.email}
                                                    avatar={elem.avatar}
                                                    role_id={elem.role_id}
                                                    updated_at={elem.updated_at.slice(0,10)}
                                                    created_at={elem.created_at.slice(0,10)}
                                                />
                                            ))}


                        {/* {articles.map(elem => 


                                                <AllUserArticles
                                                    id={elem.id}
                                                    title={elem.title}
                                                    user={elem.user}
                                                    viewsCount={elem.viewsCount}
                                                    imageUrl={elem.imageUrl}
                                                    tags={elem.tags}
                                                    created_at={elem.created_at.slice(0,10)}
                                                />

)} */}


                            {/* <div className="post-block-wrapper post-float">
                                <div className="post-thumbnail">
                                    <Link to="single-post.html">
                                        <img className="img-fluid" src="images/news/news-05.jpg" alt="post-thumbnail" width="140" height="100" />
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
                                <div className="mt-2">
                                <Link to="/article/create"><button className="btn btn-primary btn-sm mr-2" type="submit">Редактировать</button></Link>
                                    <button type="button" class="btn btn-danger btn-sm">Удалить</button>
                                </div>
                            </div>
                            <div className="post-block-wrapper post-float">
                                <div className="post-thumbnail">
                                    <Link to="single-post.html">
                                        <img className="img-fluid" src="images/news/news-0h5.jpg" alt="post-thumbnail" width="140" height="100" />
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
                                <div className="mt-2">
                                <Link to="/article/create"><button className="btn btn-primary btn-sm mr-2" type="submit">Редактировать</button></Link>
                                    <button type="button" class="btn btn-danger btn-sm">Удалить</button>
                                </div>
                            </div>
                            <div className="post-block-wrapper post-float">
                                <div className="post-thumbnail">
                                    <Link to="single-post.html">
                                        <img className="img-fluid" src="images/news/news-04.jpg" alt="post-thumbnail" width="140" height="100" />
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
                                <div className="mt-2">
                                    <Link to="/article/create"><button className="btn btn-primary btn-sm mr-2" type="submit">Редактировать</button></Link>
                                    <button type="button" class="btn btn-danger btn-sm">Удалить</button>
                                </div>
                            </div> */}

                        </div>



        </>
    )
}