const { Article } = require('../models');
const { User } = require('../models');
const { Comment } = require('../models');

const getComment = async (req, res, next) => {
    try {
        const articleId = req.params.id;
        console.log(articleId);
        console.log(req.params.user_id);



        const comment = await Comment.findAll({ 
            where: { article_id: articleId }, 
            include: User 
        })

        res.json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить комментарии" });

    }
}

const createComment = async (req, res, next) => {
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
    getComment,
    createComment
}