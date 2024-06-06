const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const placeSchema = new Schema({
       title: {

        type: String,
        required: true,
},
       description: String,
       image: {
        type:String,
        default:"https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>v===""?"https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,

       },
       price: Number,
       Location: String,
       country: String,

})


const place=mongoose.model("place",placeSchema);
module.exports = place ;