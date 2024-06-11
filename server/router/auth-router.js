const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-contoller");
// router.get("/",(req,res) =>{
//     res.status(200).send('Hello,World !! this is router');
// });

router.route("/").get(authController.home);

router.route("/register").post(authController.register);

module.exports = router;