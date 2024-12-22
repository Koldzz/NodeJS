const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Dish: {
        type: String,
        required: true
    },
    OrderNo: {
        type: Number,
        required: true,
        unique: true
    }
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
