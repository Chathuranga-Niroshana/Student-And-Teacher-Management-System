import express from "express";
import { PORT, DB_URL } from "./config.js";
import connectDB from "./connectDB.js";
import studentRoute from "./routes/studentRoutes.js";
import teacherRoute from "./routes/teacherRoutes.js";
import cors from "cors";

const app = express();
connectDB(DB_URL);

app.use(express.json());

app.use(cors());

// Routes
// students
app.use("/students", studentRoute);
// teachers
app.use("/teachers", teacherRoute);

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
