import  express  from "express";
const router = express.Router();
import employeeController  from "../controllers/employeeController"

router.post('/signup', employeeController.signup);
router.post('/login', employeeController.login);




module.exports = router;
