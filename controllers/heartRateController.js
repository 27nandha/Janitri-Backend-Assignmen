import HeartRate from "../models/HeartRate.js";
export const addHeartRate = async (req, res) => {
  const { patientId, heartRate } = req.body;
  const data = await HeartRate.create({ patientId, heartRate });
  res.status(201).json({ message: "Heart rate recorded", data });
};
export const getHeartRate = async (req, res) => {
  const records = await HeartRate.find({ patientId: req.params.patientId });
  res.json(records);
};
