// const { Article } = require('../models');
// const { User } = require('../models');
const { Comment } = require('../models');
const { Articles_Category } = require('../models');

const getCategory = async (req, res, next) => {
    try {
        // const articleId = req.params.id;
        // console.log(articleId);
        // console.log(req.params.user_id);



        const categories = await Articles_Category.findAll();
        console.log(categories);
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить категории статей" });

    }
}

const createCategory = async (req, res, next) => {
    try {

        const newComment = Comment.build({
            article_id: req.body.article_id,
            user_id: req.body.user_id,
            body: req.body.text,
            status: req.body.status
        });
        console.log(newComment);
        const comment = await newComment.save();
        console.log(comment);

        res.json(comment);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось создать комментарий" });
    }
}

module.exports = {
    getCategory,
    createCategory
}