import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { selectIsAuth } from '../redux/slices/auth';
import axios from '../axios';
import AllUserArticles from "../components/Articles/AllUserArticle";
import ImageGrid from '../components/Loading/RecentArticlesLoading';


import { fetchAuthMe } from "../redux/slices/auth";
import UserArticlesLoader from "../components/Loading/UserArticlesLoader";
import Error_404 from "../components/Error/error_404";







export function UserProfile() {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const [isLoading, setLoading] = React.useState(false);

    const userData = useSelector((state) => state.auth.data);
    const {id} = useParams();
    // const [name, setName] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [aboutMe, setAboutMe] = React.useState('');





    const onSubmit = async() => {
        try {
            setLoading(true);

            const fields = {
                firstName,
                lastName,
                country,
                city,
            }
            const {data} = await axios.patch(`/user/profile/${id}`, fields)

            // const articleId = isEdit ? id : data.id;

            // navigate(`/article/${articleId}`)

            if (data.success) {
                alert("Данные профиля успешно изменены!");

            }


        } catch (error) {
            console.warn(error);
            alert('Ошибка при изменении профиля!');

        }
    }
  
    // const onSubmitName = async() => {
    //     try {
    //         setLoading(true);

    //         const fields = {
    //             name,
    //         }
    //         if (isAuth) {
    //             const {data} = await axios.patch(`/user/name/${userData.user.id}`, fields);
                
    //             console.log(userData);
    //             if (data.success) {
    //                 setName('');
    //                 alert("Имя успешно изменено!");

    //                }
                   

    //         }
               
           

            // const articleId = isEdit ? id : data.id;

            // navigate(`/article/${articleId}`)

    //     } catch (error) {
    //         console.warn(error);
    //         alert('Ошибка при изменении имени!');

    //     }
    // }

    // const onSubmitPassword = async() => {
    //     try {
    //         setLoading(true);

    //         const fields = {
    //             password,
    //         }
    //         if (isAuth) {
    //            const {data} = await axios.patch(`/user/password/${userData.user.id}`, fields)
    //            console.log(data);
    //            if (data.success) {
    //             setPassword('');
    //             alert("Пароль успешно изменён!");
    //            }
    //         }
            
           
            // const articleId = isEdit ? id : data.id;

            // navigate(`/article/${articleId}`)

    //     } catch (error) {
    //         console.warn(error);
    //         alert('Ошибка при изменении имени!');

    //     }
    // }
    // dispatch(fetchAuthMe(userData.user.id));


    React.useEffect(() => {

        try {
            if(id) {
                axios.get(`/user/profile/${id}`)
                .then(({ data }) => {
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setCountry(data.country);
                    setCity(data.city);
                    setBirthday(data.birthday);
                    setAboutMe(data.about_me);


                })
            }

        } catch (error) {
            console.warn(error);
            alert('Ошибка при получении профиля!');

        }
      }, []);


    console.log(userData);
    return (
        <>
            <section className="block-wrapper">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
                            <div className="sidebar sidebar-left">
                                <div className="widget">
                                    <h3 className="news-title">
                                        <span>Настройки</span>
                                    </h3>
                                    <h3 className="news-title">
                                        <Link to="/user/articles"><span>Мои статьи</span></Link>
                                    </h3>
                                    <h3 className="news-title">
                                        <span>Создать статью</span>
                                    </h3>

                                    <h3 className="news-title">
                                        <span>Комментарии</span>
                                    </h3>
                                    <h3 className="news-title">
                                        <span>Лайки</span>
                                    </h3>

                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h3 >Настройки профиля</h3>
                                                    <p>
                                                        Здесь вы можете изменить некоторые настройки профиля.
                                                    </p>
                                                </div>
                                            </div>

                                            <form id="contact-form" >
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        {/* <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Hello! Why are you contacting us today?</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option>Please Select</option>
                                                                <option>I need technical support</option>
                                                                <option>I am finding issue in publishing article</option>
                                                                <option>I am intrested in publishing advertisment</option>
                                                                <option>I want to pitch a story</option>
                                                                <option>I want support in security issue</option>
                                                            </select>
                                                        </div> */}
                                                        <div className="form-group">
                                                            <label htmlFor="topic">Настройка аватарки</label>
                                                            <p>
                                                                Требования к картинке аватара
                                                            </p>
                                                            <div>
                                                                <p>Текушая аватарка</p>
                                                                <img src={userData.user.avatar} alt="author-image" width="50" height="50" />
                                                            </div>
                                                            <button className="btn btn-primary solid blank mt-3" type="submit">Загрузить новую</button>
                                                        </div>

                                                        {/* <div className="form-group">
                                                            <label htmlFor="name">Введите новое имя:</label>
                                                            <input onChange={(e) => setName(e.target.value)} value={name} className="form-control form-control-name" name="name" id="name" type="text" required />
                                                            <button onClick={onSubmitName} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button>
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="email">Введите новый пароль:</label>
                                                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="form-control form-control-email" name="email" id="email" type="email" required />
                                                            <button onClick={onSubmitPassword} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button>

                                                        </div> */}
                                                        <div className="form-group">
                                                            <label htmlFor="name">Имя</label>
                                                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control form-control-name" name="firstName" id="firstName" type="text" required />
                                                            {/* <button onClick={onSubmitName} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button> */}
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="email">Фамилия</label>
                                                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control form-control-email" name="lastName" id="lastName" type="text" required />
                                                            {/* <button onClick={onSubmitPassword} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button> */}

                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="name">Страна</label>
                                                            <input onChange={(e) => setCountry(e.target.value)} value={country} className="form-control form-control-name" name="country" id="country" type="text" required />
                                                            {/* <button onClick={onSubmitName} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button> */}
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="email">Город</label>
                                                            <input onChange={(e) => setCity(e.target.value)} value={city} className="form-control form-control-email" name="city" id="city" type="text" required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="name">День рождения</label>
                                                            <input onChange={(e) => setBirthday(e.target.value)} value={birthday} className="form-control form-control-name" name="country" id="country" type="text" required />
                                                            {/* <button onClick={onSubmitName} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button> */}
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="name">Обо мне</label>
                                                            <textarea onChange={(e) => setAboutMe(e.target.value)} value={aboutMe} className="form-control form-control-name" name="aboutMe" id="aboutMe" type="text" required />
                                                            <button onClick={onSubmit} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button>
                                                            {/* <button onClick={onSubmitName} className="btn btn-primary solid blank mt-3" type="submit">Сохранить</button> */}
                                                        </div>


                                                        {/* <div className="form-group">
                                                            <label htmlFor="message">Your Message*:</label>
                                                            <textarea className="form-control form-control-message" name="message" id="message" rows="7" required ></textarea>
                                                        </div> */}

                                                    </div>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}