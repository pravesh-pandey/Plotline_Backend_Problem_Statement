const express = require("express");
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const SellerRegister = require("./src/Add_Seller");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL,{ autoIndex: false }).then(()=>{
	console.log("connected to database");
  }).catch((err) => {
	console.log("some error could not connect to DataBase");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/seller',SellerRegister);

app.listen(process.env.PORT,(err) => {
	if(err)
	console.log("unable to connect to server");
    console.log(">---Server is running!---<");
});