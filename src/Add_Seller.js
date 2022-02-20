const router = require('express').Router();
const mongoose = require('mongoose');
const { Seller } = require("./model/seller");
const { Product } = require("./model/product");




router.post("/register",async (req,res) => {
	const newSeller = new Seller({
		sellerName:req.body.sellerName,
		sellerId:new mongoose.Types.ObjectId(),
		products:[]
	});
	for(var i=0;i<req.body.product.length;i++)
	{
		const newProduct = new Product({
			productId:new mongoose.Types.ObjectId(),
			name:req.body.product[i].name,
			price:req.body.product[i].price
		});
		newSeller.product.push(newProduct);
	}
	try{
		var SaveSeller = await newSeller.save();
		res.status(200).json(SaveSeller);
		console.log(SaveSeller);
	} catch(err){
		res.status(500).json(err);
	}
});
router.get("/log",async(req,res) =>{
	res.send("hello");
})
router.put('/:sellerId',async (req,res) => {

})
module.exports = router;