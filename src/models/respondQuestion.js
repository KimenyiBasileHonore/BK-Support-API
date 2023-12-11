const mongoose = require("mongoose");

const RespondSchema = new mongoose.Schema({
    respond: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CLIENT', 
        required: true,
    },
});

const respondModel = mongoose.model("Respond", RespondSchema);

module.exports = respondModel;
