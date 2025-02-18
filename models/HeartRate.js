import mongoose from "mongoose";

const HeartRateSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  heartRate: Number,
  recordedAt: { type: Date, default: Date.now },
});
export default mongoose.model("HeartRate", HeartRateSchema);
