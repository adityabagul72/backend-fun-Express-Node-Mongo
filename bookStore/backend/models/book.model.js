const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
        id: Number,
        name: String,
        title: String,
        price: Number,
        category: String,
        image: String
});

module.exports = mongoose.model("book", bookSchema)