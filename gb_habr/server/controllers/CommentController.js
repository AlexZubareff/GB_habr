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

module.exports = {
    getComment
}