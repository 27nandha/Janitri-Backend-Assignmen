import express from "express";
import {
  addHeartRate,
  getHeartRate,
} from "../controllers/heartRateController.js";
const router = express.Router();
router.post("/", addHeartRate);
router.get("/:patientId", getHeartRate);
export default router;
