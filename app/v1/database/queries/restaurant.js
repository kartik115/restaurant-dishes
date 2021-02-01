const restaurantModel = require("../../../models/restaurant");

module.exports.addRestaurant = (doc) => {
    return restaurantModel.create(doc);
}

module.exports.getRestaurant = () => {
    return restaurantModel.find();
}