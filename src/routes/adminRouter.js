import  express  from "express";
const router = express.Router();
import adminController  from "../controllers/adminController"

router.post('/signup', adminController.signup);
router.post('/login', adminController.login);
router.get('/clientlist', adminController.getAllClient);
router.get('/employeelist', adminController.getAllEmployee);





module.exports = router;
