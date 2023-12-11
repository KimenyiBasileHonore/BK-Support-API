const express = require("express");
const router = express.Router();
const respondController = require("../controllers/respondController");


router.post("/respond", respondController.createrespond);
router.put("/respond/:id", respondController.updaterespond);
router.delete("/respond/:id", respondController.deleterespond);
router.get('/respond', respondController.getAllrespond);
module.exports = router;
