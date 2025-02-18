import express from "express";
import { addPatient, getPatient } from "../controllers/patientController.js";
const router = express.Router();
router.post("/", addPatient);
router.get("/:id", getPatient);
export default router;
