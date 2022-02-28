const router = require("express").Router();
const mongoose = require("mongoose");
const Seller = require("../model/seller");
const Product = require("../model/product");




router.post("/register", async (req, res) => {
	const newSeller = new Seller({
		sellerName: req.body.sellerName,
		sellerId: new mongoose.Types.ObjectId(),
		products: []
	});
	for (var i = 0; i < req.body.products.length; i++) {
		const newProduct = new Product({
			productId: new mongoose.Types.ObjectId(),
			name: req.body.products[i].name,
			price: req.body.products[i].price
		});
		try {
			await newProduct.save();
			newSeller.products.push(newProduct.productId);
		} catch (err) {
			console.log("could not be able to save " + newProduct.name);
		}
	}
	try {
		await newSeller.save();
		res.status(200).send('saved new seller');
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/AddProduct", async (req, res) => {
	
	const flag = Seller.findOne({SellerId:req.body.SellerId});
	if(flag === undefined)
		res.send("Register First").status(404);
	else
	{
		var productIDS = [];
		for (var i = 0; i < req.body.products.length; i++) {
			const newProduct = new Product({
				productId: new mongoose.Types.ObjectId(),
				name: req.body.products[i].name,
				price: req.body.products[i].price
			});
			productIDS.push(newProduct.productId);
			try {
				await newProduct.save();
			} catch (err) {
				console.log("could not be able to save " + newProduct.name);
			}
		}
		try{
			Seller.updateOne(
					{SellerId:req.body.SellerId},
					{$push:{products:productIDS}}
				);
			res.send("sucessfully added product").status(200);
		}catch(err){
			res.send("server error").status(500);
		}
	}
		
	
});


router.get("/status", async (req, res) => {
	res.send("Active");
});

module.exports = router;
