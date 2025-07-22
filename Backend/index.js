require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Your original commented-out code remains untouched
// app.get("/addHoldings", ...);
// app.get("/addPositions", ...);


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// THE FIX for the old bug: Added try/catch and await
app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save(); // Wait for save to complete
    res.status(201).send("Order saved!");
  } catch (error) {
    res.status(500).send("Error saving order");
  }
});


// =========================================================
// CORRECTED AUTHENTICATION ROUTES
// =========================================================

// 1. User Registration (Signup) Route
// THE FIX: Changed path to "/signup" and now handles "username"
app.post("/signup", async (req, res) => {
  try {
    // THE FIX: Get 'username' from the request body
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Username, email, and password are required.");
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // THE FIX: Save the username as 'name' to match your schema
    const newUser = new UserModel({ name: username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
});

// 2. User Login Route
// THE FIX: Changed path to "/login" to match the frontend
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token }); // Send the token back
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
});

// Corrected startup logic
mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected!");
    app.listen(PORT, () => {
      console.log(`Server Listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to database.", error);
  });