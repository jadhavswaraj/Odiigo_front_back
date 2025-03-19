import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connectDb from "./config/dbConnection.js";
import authRoutes from "./auth/routes/auth.js";
import vehicleRoutes from "./services/vehicles/routes/vehicleRoutes.js";
import serviceRoutes from "./services/categories/services/routes/serviceRoutes.js";
import categoryRoutes from "./services/categories/routes/categoryRoutes.js";
import servicePricingRoutes from "./services/service-prices/routes/servicePricingRoutes.js";
import { redisClient } from "./auth/config/redis.js";

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/servicePricing", servicePricingRoutes);

// Connect to Redis
redisClient
  .connect()
  .then(() => console.log("Redis connected successfully"))
  .catch(console.error);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at ${port}`);
});
