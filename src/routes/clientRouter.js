import  express  from "express";
const router = express.Router();
import clientController from "../controllers/clientController";

router.post('/signup', clientController.signup);
router.post('/login', clientController.login);



module.exports = router;
