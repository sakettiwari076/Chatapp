// we will operate all the crud operation in controllers and we wil import to routes for api endpoint
const express = require("express");
const {  registerUser , authUser, allUsers  } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
router.route('/').post(registerUser).get(protect , allUsers)

 router.post('/login' , authUser) ;

module.exports = router;
