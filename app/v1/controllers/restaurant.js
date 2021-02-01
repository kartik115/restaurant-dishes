const { responseSender } = require("../helpers/responseSender");
const restaurantDbCtrl = require("../database/queries/restaurant");

module.exports.getRestaurant = async (req, res) => {
    let resp = await restaurantDbCtrl.getRestaurant();
    return responseSender("list fetch", resp, res, 200);
}

module.exports.addRestaurant = async (req, res) => {
    try {
        let resp = await restaurantDbCtrl.addRestaurant({ "name": req.body.name });
        console.log(resp);
        return responseSender("data added", [resp], res, 200);
    } catch (error) {
        console.log("error is", error);
    }
}