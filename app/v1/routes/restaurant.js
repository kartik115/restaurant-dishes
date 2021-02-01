module.exports.init = (app) => {
    const {validate} = require('../middleware/validRequest');
    const routerV1 = app.get('routerV1');
    const restaurantCtrl = require("../controllers/restaurant");

    routerV1.route("/restaurant")
        .post(validate, restaurantCtrl.addRestaurant)
        .get(validate, restaurantCtrl.getRestaurant)
}