const router = require("express").Router();
const Product = require("../model/product");
const {parse, stringify} = require('flatted');


router.get("/status",async(req,res) => {
	res.send("Active");
});
router.get("/AllProduct",async(req,res) => {
	var AllProduct = Product.find();
	var productJson = stringify(AllProduct);
	res.send(productJson).status(200);
})

module.exports = router;