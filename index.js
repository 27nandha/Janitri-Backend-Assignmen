import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import patientRoutes from "./routes/patientRoutes.js";
import heartRateRoutes from "./routes/heartRateRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Connect to Database

connectDB();
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/heart-rate", heartRateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
