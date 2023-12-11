import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true 
    },
    LastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    AccountNumber: {
        type: Number,
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
        default: "CLIENT",
    },
    
    
    
    

})

const clientModel = mongoose.model("Client", ClientSchema);
export default clientModel;