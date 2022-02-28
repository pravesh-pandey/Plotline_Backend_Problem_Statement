const mongoose = require('mongoose');

const SellerSchema =  new mongoose.Schema({
	sellerName :{
		type: String,
		require: true,
		min: 3,
		max: 50,
	},
	sellerId:mongoose.ObjectId,
	products:[
		{
			type:mongoose.ObjectId,
		}
	]
});
module.exports = mongoose.model('Seller',SellerSchema);
