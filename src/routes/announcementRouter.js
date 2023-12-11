const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcementController");


router.post("/announcement", announcementController.createannouncement);
router.put("/announcement/:id", announcementController.updateannouncement);
router.delete("/announcement/:id", announcementController.deleteannouncement);
router.get('/announcement', announcementController.getAllannouncement);
module.exports = router;
