const express = require("express");
const router = express.Router();
const Controller = require("../controllers/domainController");
const controller = new Controller();
router.get("/", controller.getList);
router.get("/:id", controller.getSingle);
router.post("/:id", controller.insert);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
module.exports = router;