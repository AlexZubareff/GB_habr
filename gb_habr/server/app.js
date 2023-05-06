const express = require('express');
const multer = require('multer');



const { UserController, ArticleController } = require('./controllers/index');
const { userValidators, articleValidators, checkAuth, checkValidation } = require('./services/index');


const app = express();
app.use(express.json());
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


app.post('/auth/register', userValidators.registerUserValidation, checkValidation, UserController.register);
app.get('/auth/login', userValidators.loginUserValidation, checkValidation, UserController.login);
app.get('/auth/me', checkAuth, UserController.auth);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
});

app.get('/posts', ArticleController.getAll);
app.get('/posts/:id', ArticleController.getOne);

app.post('/posts', checkAuth, articleValidators.articleCreateValidation, checkValidation, ArticleController.create);
app.patch('/posts/:id', checkAuth, articleValidators.articleUpdateValidation, checkValidation, ArticleController.update);
app.delete('/posts/:id', checkAuth, ArticleController.remove);


app.listen(7777, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server started on 7777 port')
});
