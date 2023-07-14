import React from "react";
import { Link } from 'react-router-dom';
import LoadingFullArticle from "../Loading/loadingFullArticle";
import { useDispatch } from "react-redux";
import axios from "../../axios";
import { fetchRemoveArticle } from "../../redux/slices/articles";
import { UserArticles } from "../../pages/UserArticles";
import UserArticlesLoader from "../Loading/UserArticlesLoader";

export default function AdminUsers({
    id,
    name,
    email,
    avatar,
    role_id,
    updated_at,
    created_at,
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
            <Link to={`profile/${id}`}>
                <img className="img-fluid" src={avatar} alt={avatar} width="140" height="100" />
            </Link>
        </div>
        <div className="post-content">
            <h2 className="post-title title-sm">
                <Link to={`profile/${id}`}>{name}</Link>
            </h2>
            <div className="post-meta">
                <p className="posted-time mb-0" >Почта:{email}</p>
                <p className="posted-time mb-0">ID роли:{role_id}</p>
                <p className="posted-time mb-0"><i className="fa fa-clock-o mr-1"></i> Создан:{created_at}</p>
                <p className="posted-time mb-0"><i className="fa fa-clock-o mr-1"></i> Изменен:{updated_at}</p>
            </div>
        </div>
        <div className="mt-2">
        <Link to={`profile/${id}`}><button className="btn btn-primary btn-sm mr-2" type="submit">Карточка пользователя</button></Link>
{/* 
        <Link to={`/article/${id}/edit`}><button className="btn btn-primary btn-sm mr-2" type="submit">Редактировать</button></Link>
            <button onClick={onClickRemove} type="button" class="btn btn-danger btn-sm">Удалить</button> */}
        </div>
    </div>



    )
}