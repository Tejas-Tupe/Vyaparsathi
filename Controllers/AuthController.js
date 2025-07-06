import { User } from "../Database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobile,
      email,
      password,
      confirmPassword,
      shopName,
      shopType,
      address,
      gstin
    } = req.body;

    // Validation
    if (!firstName || !mobile || !email || !password || !confirmPassword)
      return res.status(400).json({ error: "Please fill all required fields." });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't match." });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists with this Email" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      mobile,
      email,
      password: hashedPassword,
      shopName,
      shopType,
      address,
      gstin
    });


    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, {
      expiresIn: "2d"
    });

    res.status(201).json({
      message: "User registered successfully. Please login.",
      token,
      user: {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        mobile: user.mobile
      }
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Server error during signup." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email});
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user;

    const {
      firstName,
      lastName,
      email,
      mobile,
      shopName,
      shopType,
      address,
      gstin
    } = req.body;

    if (!firstName || firstName.length < 2) {
      return res.status(400).json({ error: "First name must be at least 2 characters." });
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }


    if (!mobile || mobile.length < 10) {
      return res.status(400).json({ error: "Mobile number must be at least 10 digits." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        email,
        mobile,
        shopName,
        shopType,
        address,
        gstin
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser
      
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while updating profile." });
  }
};
