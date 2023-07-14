const { Article, User, Comment, Articles_Category } = require('../models');
// const { User } = require('../models');
// const { Comment } = require('../models');
// const { Articles_Category } = require('../models');


const getAll = async (req, res, next) => {
    try {
        const articles = await Article.findAll({
            where: {
                status: 'published'
              },
            include: [User, Comment],
            limit: 9,
        },
        );

        res.json(articles);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статьи" });

    }
};

// ПОЛУЧЕНИЕ ВСЕХ СТАТЕЙ ПОЛЬЗОВАТЕЛЯ

const getAllArticlesUser = async (req, res, next) => {

    try {
        const userId = req.params.id;
        console.log(userId);
        const articles = await Article.findAll({
            where: {
                user_id: userId,
                // status: 'published'
              },
            limit: 10,
        },
        );

        res.json(articles);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статьи" });

    }
};

const getCategoryArticles = async (req, res, next) => {

    try {
        const category_id = req.params.id;
        console.log(category_id);
        const articles = await Article.findAll({
            where: {
                category_id: category_id,
                status: 'published',
                },
                include: [Articles_Category, User],
            limit: 5,
        },
        );

        res.json(articles);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статьи по этой категории" });

    }
};


const getOne = async (req, res, next) => {
    try {
        const articleId = req.params.id;
        console.log(articleId);
        console.log(req.params.user_id);


        const inc = await Article.increment({ viewsCount: 1 },
            {   
                where: { id: articleId },
            },
        )
        if (!inc) throw ('Error inc');

        const article = await Article.findByPk(articleId, {
            include: [User, Comment]
        },
        )

        res.json(article);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статью" });

    }
}

const remove = async (req, res, next) => {
    try {
        const articleId = req.params.id;
        console.log(articleId);

        await Article.update(
            {
                status: 'delete',
              },
            {
            where: {
                id: articleId,
            }
            }
        )


        res.json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статью" });

    }
}

const create = async (req, res, next) => {
    try {

        const newArticle = Article.build({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            category_id: req.body.category_id,
            user_id: req.user_id,
            status: req.body.status
        });
        console.log(newArticle);
        const article = await newArticle.save();
        console.log(article);

        res.json(article);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось создать статью" });
    }
}


const update = async (req, res, next) => {
    try {
        const articleId = req.params.id;
        await Article.update({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            category_id: req.body.category_id,
            user_id: req.user_id,
            status: req.body.status
        },
            {
                where: {
                    id: articleId,
                }
            });

        res.json({
            success: true,
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось обновить статью" });

    }
}


module.exports = {
    create,
    getAll,
    getOne,
    remove,
    update,
    getAllArticlesUser,
    getCategoryArticles
}