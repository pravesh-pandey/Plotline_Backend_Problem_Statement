const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const SellerRegister = require("./src/routes/Seller");
const Admin = require("./src/routes/Admin");

const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL,{ autoIndex: false }).then(()=>{
	console.log("connected to database");
  }).catch((err) => {
	console.log("some error could not connect to DataBase");
});

app.use(express.json());
app.use("/seller",SellerRegister);
app.use("/Admin",Admin);
app.get("/status",async(req,res) =>{
	res.send("Active");
});

app.listen(process.env.PORT,(err) => {
	if(err)
	console.log("unable to connect to server");
    console.log(">---Server is running!---<");
});
