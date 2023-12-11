import announcementModel from '../models/announcement';

exports.createannouncement = async (req, res) => {
    try {
        const { announcement } = req.body;


        const newannouncement = new announcementModel({ announcement });


        await newannouncement.save();

        res.status(201).json(newannouncement);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


exports.updateannouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const { announcement } = req.body;


        const updatedannouncement = await announcementModel.findByIdAndUpdate(id, { announcement }, { new: true });

        if (!updatedannouncement) {
            return res.status(404).send("announcement not found");
        }

        res.json(updatedannouncement);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.deleteannouncement = async (req, res) => {
    try {
        const { id } = req.params;


        const deletedannouncement = await announcementModel.findByIdAndRemove(id);

        if (!deletedannouncement) {
            return res.status(404).send("announcement not found");
        }

        res.json(deletedannouncement);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getAllannouncement = async (req, res) => {
    try {
        const announcement = await announcementModel.find();
        res.status(200).json({ announcement });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

