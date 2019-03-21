const express = require("express");
const router = express.Router();
const Controller = require("../controllers/resTypeController");
const controller = new Controller();
router.get("/", controller.getList);
module.exports = router;