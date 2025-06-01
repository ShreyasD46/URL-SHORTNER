const express = require("express");
const {handleGenNewShortUrl}=require("../constrollers/url");
 const router=express.Router(); 



 router.post("/",handleGenNewShortUrl);

 module.exports = router; 