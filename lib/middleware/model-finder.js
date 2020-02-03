module.exports = (req, res, next) => {
    let modelName = req.params.model;
    req.model = require(`../models/${modelName}/${modelName}-collection.js`);
    next();
};