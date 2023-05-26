const { Article } = require('../models');
const { User } = require('../models');




const getAll = async (req, res, next) => {
    try {
        const articles = await Article.findAll({
            include: User,
            limit: 9,
        },
        );

        res.json(articles);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось получить статьи" });

    }
};

const getOne = async (req, res, next) => {
    try {
        const articleId = req.params.id;
        console.log(articleId);


        const inc = await Article.increment({ viewsCount: 1 },
            {
                where: { id: articleId },
            },
        )
        if (!inc) throw ('Error inc');

        const article = await Article.findByPk(articleId, {
            include: User,
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

        await Article.destroy({
            where: {
                id: articleId,
            }
        })


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
            user_id: req.user_id
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
            user_id: req.user_id
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
    update
}