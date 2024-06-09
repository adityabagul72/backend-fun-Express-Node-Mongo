require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const candidateSchema = mongoose.Schema({
    name : {
        type : String,
        reuired : true
    },
    party:{
        type:String,
         required:true
    },
    age:{
        type:Number,
        required : true
    },

    votes : [
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            reuired:true
        },
        votedAt:{
            type:Date,
            default:Date.now
        }
    }],

    voteCount:{
        type:Number,
        default:0
    }

})

module.exports = mongoose.model("Candidate",candidateSchema)