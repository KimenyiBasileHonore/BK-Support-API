import respondModel from '../models/respondQuestion';
import clientModel from '../models/Clients';

exports.createrespond = async (req, res) => {
    try {
        const { respond } = req.body;
        const userId = req.user.id;


        const userExists = await clientModel.findById(userId);
        if (!userExists) {
            return res.status(404).send("User not found");
        }

        const newrespond = new respondModel({ respond, user: userId });
        await newrespond.save();

        res.status(201).json(newrespond);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


exports.updaterespond = async (req, res) => {
    try {
        const { id } = req.params;
        const { respond } = req.body;


        const updatedrespond = await respondModel.findByIdAndUpdate(id, { respond }, { new: true });

        if (!updatedrespond) {
            return res.status(404).send("respond not found");
        }

        res.json(updatedrespond);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.deleterespond = async (req, res) => {
    try {
        const { id } = req.params;


        const deletedrespond = await respondModel.findByIdAndRemove(id);

        if (!deletedrespondt) {
            return res.status(404).send("respond not found");
        }

        res.json(deletedrespond);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getAllrespond = async (req, res) => {
    try {
        const respond = await respondModel.find();
        res.status(200).json({ respond });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

