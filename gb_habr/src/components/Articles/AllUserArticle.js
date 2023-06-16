import React from "react";
import { Link } from 'react-router-dom';
import LoadingFullArticle from "../Loading/loadingFullArticle";
import { useDispatch } from "react-redux";
import axios from "../../axios";
import { fetchRemoveArticle } from "../../redux/slices/articles";
import { UserArticles } from "../../pages/UserArticles";
import UserArticlesLoader from "../Loading/UserArticlesLoader";

export default function AllUserArticle({
    id,
    title,
    text,
    tags,
    imageUrl,
    viewsCount,
    created_at,
    updated_at,
    deleted_at,
    category_id,
    user_id,
    isLoading
}) {

    const dispatch = useDispatch();

    if (isLoading) {
        return <UserArticlesLoader />

      }

    const onClickRemove = () => {
        if (window.confirm('Выдействительно хотите удалить статью?')) {
            dispatch(fetchRemoveArticle(id))
        }
    }

    

    // const onClickRemove = () => {
    //     axios
    //     .delete(`/posts/${id}`)
        
    //     .catch(err => {
    //         console.log(err);
    //         alert('Ошибка при удалении статьи')
    //     })

    // }




    return (

        <div className="post-block-wrapper post-float">
        <div className="post-thumbnail">
            <Link to={`/article/${id}`}>
                <img className="img-fluid" src={imageUrl} alt={title} width="140" height="100" />
            </Link>
        </div>
        <div className="post-content">
            <h2 className="post-title title-sm">
                <Link to={`/article/${id}`}>{title}</Link>
            </h2>
            <div className="post-meta">
                <span className="posted-time"><i className="fa fa-clock-o mr-1"></i> {created_at}</span>
            </div>
        </div>
        <div className="mt-2">
        <Link to={`/article/${id}/edit`}><button className="btn btn-primary btn-sm mr-2" type="submit">Редактировать</button></Link>
            <button onClick={onClickRemove} type="button" class="btn btn-danger btn-sm">Удалить</button>
        </div>
    </div>



    )
}