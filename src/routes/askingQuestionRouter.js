const express = require("express");
const router = express.Router();
const { questionReport, getAllQuestion } = require("../controllers/askingQuestionController");

router.post("/question", questionReport);
router.get("/allquestion", getAllQuestion);


module.exports = router;
