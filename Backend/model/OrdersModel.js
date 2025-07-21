const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema"); // This path will now be correct

const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };