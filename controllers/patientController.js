import Patient from "../models/Patient.js";
export const addPatient = async (req, res) => {
  const { name, age, userId } = req.body;
  const patient = await Patient.create({ name, age, userId });
  res.status(201).json({ message: "Patient added", patient });
};
export const getPatient = async (req, res) => {
  const patient = await Patient.findById(req.params.id).populate(
    "userId",
    "name email"
  );
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
};
