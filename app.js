const express = require("express");
const app = express();
const mongoose = require("mongoose");
const place=require("./models/place");


const mongo_url = "mongodb://127.0.0.1:27017/place";

main().then(()=>{
    console.log("Connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);

}

app.get("/",(req,res)=>{
    res.send("Hi , mai root hu");
})

app.get("/demoPlace",async(req,res)=>{
    let samplePlace = new place({
        title:"My New Hotel",
        description:"It is very awesome",
        price: "1800",
        Locatio: "Agra",
        Country: "India"
    })
    await samplePlace.save();
    console.log("Sample Was Saved");
    res.send("Succesfull Testing");

})

app.listen(8080,()=>{
    console.log("Run 8080");
})

