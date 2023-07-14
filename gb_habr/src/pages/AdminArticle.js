import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slices/auth';
import { Link, Navigate, Outlet } from "react-router-dom";
import axios from '../axios';
import AllUserArticles from "../components/Articles/AllUserArticle";
import ImageGrid from '../components/Loading/RecentArticlesLoading';


import { fetchAllUserArticles, fetchArticles, fetchRemoveArticle } from "../redux/slices/articles";
import UserArticlesLoader from "../components/Loading/UserArticlesLoader";
import Error_404 from "../components/Error/error_404";





export function AdminArticle() {

const dispatch = useDispatch();
const {articles} = useSelector(state => state.articles);
const userData = useSelector((state)=>state.auth.data);
// const [filteredData, setFilteredData] = React.useState(articles.items);

// const [data, setData] = React.useState();
const [isLoading, setLoading] = React.useState(true);

console.log(userData.user.id);
const userId = userData.user.id;
const isArticlesLoading = articles.status === 'loading';

// React.useEffect(() => {
// dispatch(fetchUserArticles(values));

// }, []);

// const getArticles = () => {
//     dispatch(fetchArticles());
// }


React.useEffect(() => {
    // axios.get('/posts');
    dispatch(fetchArticles());
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
  
//   console.log(filteredData.length);
//   console.log(filteredData);
//   console.log(filteredData);
    const isAuth = useSelector(selectIsAuth);


    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to="/" />
    }

    // const filterArticles = (param) => {
    //     let data = articles.items;
    //     if(param == '') {
    //         setFilteredData(data);
    //     } else {
    //         let filteredData = data.filter(elem =>
    //             elem.status == param
    //         )
    //         console.log(filteredData);
    //         setFilteredData(filteredData);
    //     }


    // }

//     React.useEffect(() => {
// dispatch(publishedArticles())
    
//     }, [publishedArticles])
    


    // if (articles.items.length == 0) {
    //     return <Error_404 />
    // } 

    // if (isLoading) {
    //     return <AllUserArticles 
    //     isLoading = {isLoading}
    //     />
    // }
    
    // console.log(filteredData);
    console.log(articles.items);

    
    return (
        <>
                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        { articles.length == 0 ? <Error_404 /> :

                        (isArticlesLoading ? [...Array(<UserArticlesLoader />)] : articles.items).map((elem, index) =>
                                            isArticlesLoading ? (
                                                <UserArticlesLoader />
                                            ) : (
                                                
                                                <AllUserArticles
                                                    id={elem.id}
                                                    title={elem.title}
                                                    user={elem.user}
                                                    viewsCount={elem.viewsCount}
                                                    imageUrl={elem.imageUrl}
                                                    tags={elem.tags}
                                                    status={elem.status}
                                                    created_at={elem.created_at.slice(0,10)}
                                                />
                                            ))}




                        </div> 

                        </>
    )   
    
}