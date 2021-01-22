var express = require("express");
const cors = require("cors");
const db = require("../db/db");
var router = express.Router();
router.use(cors());
router.use(express.json());

//正常登入Login api
router.post("/api/login", async (req, res) => {
  const findAdmin = "select * from sqlInjection where name = ?";
  await db.query(findAdmin, [req.body.name], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(200).send(false);
    } else {
      let pw = JSON.parse(JSON.stringify(result))[0].password;
      if (pw === req.body.password) {
        res.status(200).json({ message: result[0].message });
      } else {
        res.status(200).send(false);
      }
    }
  });
});

//正常登入SQL injection Login api
router.post("/api/injectlogin", async (req, res) => {
  const findAdmin =
      "select message from sqlInjection where password = '" +
      req.body.password +
      "'" +
      " and name = '" +
      req.body.name +
      "'";
  await db.query(findAdmin, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(200).send(false);
    } else {
      let message = [];
      for (let i = 0; i < result.length; i++) {
        message.push(result[i].message);
      }
      res.status(200).json({ message: message });
    }
  });
});

module.exports = router;