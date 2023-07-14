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

    console.log(id);

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
                status: 'published',
                category_id: 4,
            }
            const {data} = isEdit
            ? await axios.patch(`/posts/${id}`, fields)
            : await axios.post('/posts', fields);

            const articleId = isEdit ? id : data.id;

            navigate(`/article/${articleId}`)

        } catch (error) {
            console.warn(error);
            alert('Ошибка при создании статьи!');

        }
    }

    const onSubmitDraft = async() => {
        try {
            setLoading(true);

            const fields = {
                title,
                imageUrl,
                tags,
                text,
                status: 'draft',
                category_id: 4,
            }
            const {data} = isEdit
            ? await axios.patch(`/posts/${id}`, fields)
            : await axios.post('/posts', fields);

            const articleId = isEdit ? id : data.id;

            navigate(`/article/${articleId}`)

        } catch (error) {
            console.warn(error);
            alert('Ошибка при создании черновика!');

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

const isEdit = Boolean(id);

    return (

        
        <>
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
                            <button onClick={onSubmit} className="btn btn-primary mr-2" type="submit">{isEdit ? 'Сохранить' : 'Опубликовать'}</button>
                            <button onClick={onSubmitDraft} className="btn btn-primary mr-2" type="submit">Сохранить черновик</button>

                            <button type="button" class="btn btn-danger">Отмена</button>
                </div>

    </section>
        </>

    )
}