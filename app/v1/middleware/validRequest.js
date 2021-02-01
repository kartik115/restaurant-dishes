const authKeys = ["1", "2", "3"];
const { responseSender } = require('./../helpers/responseSender');

module.exports.validate = (req, res, next) => {
    let authKey = req.headers.authorization;
    if (authKeys.includes(authKey)) {
        return next();
    } else {
        return responseSender("Unauthoized", [], res, 403);
    }
}