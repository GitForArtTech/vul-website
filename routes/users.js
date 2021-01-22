var express = require("express");
const cors = require("cors");
const db = require("../db/db");
var router = express.Router();
router.use(cors());
router.use(express.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
