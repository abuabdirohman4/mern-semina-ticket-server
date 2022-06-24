const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        // const name = req.body.name;
        // const title = req.body.title;
        const {name, title} = req.body;
    } catch (err) {
        next(err);
    }
}