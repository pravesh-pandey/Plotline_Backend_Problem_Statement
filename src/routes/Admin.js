const router = require("express").Router();




router.get("/status",async(req,res) =>{
	res.send("Active");
});

module.exports = router;