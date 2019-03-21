const express = require("express");
const router = express.Router();
const controller = require("../controllers/resTypeController");
router.get("/", controller.getList);
module.exports = router;