import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/Nav/NavBar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { SimpleMdeReact } from "react-simplemde-editor";
import { logaut, selectIsAuth } from '../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios';



import 'easymde/dist/easymde.min.css';


export function AddArticle() {

    const {id} = useParams();
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const [isLoading, setLoading] = React.useState(false);
    const [text, setText] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const inputFileRef = React.useRef(null);


    const handleChangeFile = async(event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const {data} = await axios.post('/upload', formData);
            setImageUrl(data.url);
        } catch (error) {
            console.warn(error);
            alert('Ошибка при загрузке файла!');
        }
    };

    const onClickRemoveImage = () => {
        setImageUrl('');
    };

    const onSubmit = async() => {
        try {
            setLoading(true);

            const fields = {
                title,
                imageUrl,
                tags,
                text,
                category_id: 7,
            }
            const {data} = await axios.post('/posts', fields);

            const id = data.id;

            navigate(`/article/${id}`)

        } catch (error) {
            console.warn(error);
            alert('Ошибка при создании статьи!');

        }
    }

    const onChange = React.useCallback((value) => {
        setText(value);
      }, []);
    
      React.useEffect(() => {

        try {
            if(id) {
                axios.get(`/posts/${id}`)
                .then(({ data }) => {
                    setTitle(data.title);
                    setText(data.text);
                    setTags(data.tags);
                    setImageUrl(data.imageUrl)
                })
            }

        } catch (error) {
            console.warn(error);
            alert('Ошибка при получении статьи!');

        }
      }, []);

      const options = React.useMemo(
        () => ({
          spellChecker: false,
          maxHeight: '400px',
          autofocus: true,
          placeholder: 'Введите текст статьи...',
          status: false,
          autosave: {
            enabled: true,
            delay: 1000,
          },
        }),
        [],
      );

if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />
}

console.log({title, tags, text});

    return (

        
        <>
                <div className="trending-bar-dark hidden-xs">
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
</div>

<Header />
<NavBar />


    <section className="block-wrapper no-sidebar">
    <div className="mb-2">
                            <button onClick={() => inputFileRef.current.click()} className="btn btn-primary mb-2 mr-2" type="submit">Загрузить картинку</button>
                            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden/>
                            {imageUrl && (
        <>
            <button type="button" className="btn btn-danger mb-2" onClick={onClickRemoveImage}>Удалить</button>
            <img src={`http://localhost:7777${imageUrl}`} alt="Uploaded" width="850"/>

        </>
    )

    }

                </div>
                <div className="post-title">
                    <div className="form-group">
                        <label htmlFor="f-name">Заголовок статьи</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="f-name" name="title" placeholder="Введите заголовок статьи..." />
                    </div>
                </div>
                <div className="post-title">
                    <div className="form-group">
                        <label htmlFor="f-name">Теги</label>
                        <input onChange={(e) => setTags(e.target.value)} value={tags} type="text" className="form-control" id="f-name" name="name" placeholder="Введите теги статьи через запятую..." />
                    </div>
                </div>
                <SimpleMdeReact value={text} onChange={onChange} options={options} />
                <div className="mt-2">
                            <button onClick={onSubmit} className="btn btn-primary mr-2" type="submit">Опубликовать</button>
                            <button type="button" class="btn btn-danger">Отмена</button>
                </div>

    </section>
            <Footer />
        </>

    )
}