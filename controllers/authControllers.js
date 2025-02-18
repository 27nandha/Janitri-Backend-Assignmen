import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(400).json({ error: "Email already exists" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
};
