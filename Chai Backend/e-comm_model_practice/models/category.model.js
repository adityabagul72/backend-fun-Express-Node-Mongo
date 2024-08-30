import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name : {
        type:String,
        reequired:true
    },
    
},{timestamos:true})

export const Category = mongoose.model("Category",categorySchema)