const bookModel = require("../models/book.model")

const getBook =async (req,res) =>{
    try{
        const book = await bookModel.find();
        res.status(200).json(book);
    }catch(error){
        console.log("While fetching data of Books.",error);
        res.status(500);
    }
}
module.exports = getBook