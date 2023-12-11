import clientModel from '../models/Clients';
import generateToken from '../helpers/tokenGenerator';
import { hashedPassword, compareHashedPassword } from '../helpers/bcrypt'; 


class clientController {
        static async signup(req, res) {
            const { FirstName, LastName, email,  AccountNumber, password, phone } = req.body;
            try {
                console.log('Received signup request:', req.body);
    
                const hashedPwd = await hashedPassword(password);
                
                const user = new clientModel({
                    FirstName,
                    LastName,
                    email,
                    AccountNumber,
                    password: hashedPwd,
                    phone,
                    role: "CLIENT",
                });
    
                const data = await user.save();
                const token = await generateToken(email);
    
                console.log('User saved successfully:', data);
    
                res.status(200).json({ "message": "Successfully saved", "token": token });
            } catch (error) {
                console.error('Error during signup:', error);
    
                if (error.code === 11000) {
                    console.log('Email or phone might be used');
                    res.status(405).json({ "message": "Email or phone might be used" });
                } else {
                    console.log('Other error:', error.message);
                    res.status(400).json(error.message);
                }
            }
        }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await clientModel.findOne({ email });

            if (!user) {
                res.status(401).json({ "message": "User not found" });
                return;
            }

            const isPasswordValid = await compareHashedPassword(password, user.password); 

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
    

    

export default clientController;
