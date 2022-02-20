const mongoose = require('mongoose');

const ProductSchema =  new mongoose.Schema({
	name :{
		type: String,
		require: true,
		min: 3,
		max: 50,
	},
	productId:{
		type: mongoose.Schema.Types.ObjectId, 
		default: mongoose.Schema.Types.ObjectId, 
		null: false
	},
	price:{
		type:Number,
		required:true,
	},
});
const Product = mongoose.model("Product",ProductSchema);
exports.default = { Product };