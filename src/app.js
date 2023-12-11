import express from 'express';
import cors from 'cors';
import dbConnect from './database/dbConnect';
import clientRouter from './routes/clientRouter';
import employeeRouter from './routes/employeeRouter';
import adminRouter from './routes/adminRouter';
import feedbackRoute from "./routes/feedbackRoute";
import askingQuestionRoute from "./routes/askingQuestionRouter";
import announcementRoute from "./routes/announcementRouter";
import respondRoute from "./routes/respondRouter";



const app = express();
dbConnect();

app.use(cors({ orgin: "*" }));
app.use(express.json());


app.use('/api/client', clientRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/feedback' ,feedbackRoute);
app.use('/api/question' ,askingQuestionRoute);
app.use('/api/announcement' ,announcementRoute);
app.use('/api/respond' ,respondRoute);

export default app;

