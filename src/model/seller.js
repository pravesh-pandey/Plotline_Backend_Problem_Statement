const mongoose = require('mongoose');

const SellerSchema =  new mongoose.Schema({
	sellerName :{
		type: String,
		require: true,
		min: 3,
		max: 50,
	},
	sellerId:{
		type: mongoose.Schema.Types.ObjectId, 
		default: mongoose.Schema.Types.ObjectId, 
		null: false
	},
	products:{
		type:Array,
		default:[]
	}
});
const Seller = mongoose.model("Seller",SellerSchema)
exports.default = { Seller };