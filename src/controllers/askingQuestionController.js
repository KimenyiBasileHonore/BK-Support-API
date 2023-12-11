import askingQuestion from "../models/askingQuestion";


exports.questionReport = async (req, res) => {
  try {
    console.log('Request received');

      const { names, email, accountNumber, phone ,message } = req.body;

      console.log('Received form data:', {
        names,
        email,
        phone,
        accountNumber,
        message, 
      });
      

      const newQuestion = new askingQuestion({
        names,
        email,
        phone,
        accountNumber,
        message, 
      });

      console.log('Saving the question');

      const savedQuestion = await newQuestion.save();
      res.status(201).json({ message: "Donation report created successfully", report: savedQuestion });
  } catch (error) {
    console.error('Catch block error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};




exports.getAllQuestion = async (req, res) => {
  try {
    const question = await askingQuestion.find();
    res.status(200).json({ question });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};









