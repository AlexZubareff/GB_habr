const express = require('express');
const multer = require('multer');
const cors = require('cors');



const { UserController, ArticleController, CommentController, CategoryController, ProfileController } = require('./controllers/index');
const { userValidators, articleValidators, checkAuth, checkValidation, checkRole } = require('./services/index');



const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },

});

const upload = multer({ storage });

app.get('/', (req, res, next) => {
    res.send('Hello!333333');
})

// АВТОРИЗАЦИЯ
app.post('/auth/register', userValidators.registerUserValidation, checkValidation, UserController.register);
app.post('/auth/login', userValidators.loginUserValidation, checkValidation, UserController.login);
app.get('/auth/me', checkAuth, UserController.auth);


//АДМИН РОУТЫ
// Получение всех пользователей
app.get('/admin/users', checkRole(['1', '2', '3']), UserController.getUsers)


// ЗАГРУЗКА ФАЙЛОВ
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
});
// ПОЛУЧЕНИЕ ВСЕХ СТАТЕЙ
app.get('/posts', ArticleController.getAll);
// ПОЛУЧЕНИЕ ОДНОЙ СТАТЬИ
app.get('/posts/:id', ArticleController.getOne);
// ПОЛУЧЕНИЕ СТАТЕЙ ПО КАТЕГОРИИ
app.get('/posts/category/:id', ArticleController.getCategoryArticles);

// ПОЛУЧЕНИЕ СТАТЕЙ ПОЛЬЗОВАТЕЛЯ
app.get('/posts/user/:id', ArticleController.getAllArticlesUser);


app.post('/posts', checkAuth, articleValidators.articleCreateValidation, checkValidation, ArticleController.create);
app.patch('/posts/:id', checkAuth, articleValidators.articleUpdateValidation, checkValidation, ArticleController.update);
app.delete('/posts/:id', checkAuth, ArticleController.remove);


// ПОЛУЧЕНИЕ КОММЕНТАРИЕВ СТАТЬИ
app.get('/posts/comment/:id', CommentController.getComment);

// СОЗДАНИЕ КОММЕНТАРИЯ
app.post('/comment/add', checkAuth, CommentController.createComment)

// ПОЛУЧЕНИЕ КАТЕГОРИЙ СТАТЕЙ
app.get('/category', CategoryController.getCategory);


// ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
app.get('/user/profile/:id', checkAuth, ProfileController.getProfile);
app.patch('/user/profile/:id', checkAuth, ProfileController.updateProfile);


//Получение всех  пользователей
// app.patch('/user/name/:id', UserController.updateUserName);
// app.patch('/user/password/:id', UserController.updateUserPassword);

// app.post('/posts', checkAuth, articleValidators.articleCreateValidation, checkValidation, ArticleController.create);
// app.patch('/posts/:id', checkAuth, articleValidators.articleUpdateValidation, checkValidation, ArticleController.update);
// app.delete('/posts/:id', checkAuth, ArticleController.remove);



app.listen(7777, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server started on 7777 port')
});
