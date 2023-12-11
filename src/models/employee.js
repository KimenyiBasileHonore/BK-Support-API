import { Schema, model } from 'mongoose'

const EmployeeSchema = new Schema ({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },
    
    role:{
        type: String,
        default: "EMPLOYEE",
    }

})

const employeeModel=model("employee",EmployeeSchema);

export default employeeModel;