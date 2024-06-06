const mongoose = require("mongoose");
const initData = require("./data");
const place = require("../models/place");


const mongo_url = "mongodb://127.0.0.1:27017/place";

main().then(()=>{
    console.log("Connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);

}


const initDb = async()=>{
    await place.deleteMany({}),
    await place.insertMany(initData.data)
    console.log("data was intialized")
}
initDb();
