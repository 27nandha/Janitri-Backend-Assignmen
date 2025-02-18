import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
export default mongoose.model("Patient", PatientSchema);
