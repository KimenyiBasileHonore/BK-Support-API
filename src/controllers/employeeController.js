import employeeModel from '../models/employee';
import { hashedPassword, compareHashedPassword } from '../helpers/bcrypt';
import generateToken from '../helpers/tokenGenerator';
import clientModel from "../models/Clients";


class employeeController {
    static async signup(req, res) {
        const { name,email, password, phone } = req.body;
        try {
            
            const hashedPwd = await hashedPassword(password);
            
            
            const employee = new employeeModel({
                name,
                email,
                phone,
                password: hashedPwd,
            });

            
            const data = await employee.save();
            const token = await generateToken(email);

            res.status(200).json({ "message": "Employee successfully registered", "token": token });
        } catch (error) {
            if (error.code === 11000) {
                res.status(405).json({ "message": "Email is already in use" });
            } else {
                res.status(400).json({ "message": "An error occurred while signing up" });
                console.log(error);
            }
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            
            const employee = await employeeModel.findOne({ email });

            if (!employee) {
                res.status(401).json({ "message": "Employee not found" });
                return;
            }

            
            const isPasswordValid = await compareHashedPassword(password, employee.password);

            if (!isPasswordValid) {
                res.status(401).json({ "message": "Invalid password" });
                return;
            }

            
            const token = await generateToken(email);
            res.status(200).json({ "message": "Login successful", "token": token });
        } catch (error) {
            res.status(500).json({ "message": "An error occurred while logging in" });
        }
    }
    

    
    
}

export default employeeController;
