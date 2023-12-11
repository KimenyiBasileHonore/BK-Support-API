const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    announcement: {
        type: String,
    }
});

const AnnouncementModel = mongoose.model("announcement", AnnouncementSchema);

module.exports = AnnouncementModel;
