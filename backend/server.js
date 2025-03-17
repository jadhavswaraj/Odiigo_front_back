const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();
const cors = require("cors");
const authRoutes = require("./auth/routes/auth");
const bodyParser = require("body-parser");
const { redisClient } = require("./auth/config/redis");

connectDb();
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/api/vehicles", require('./services/vehicles/routes/vehicleRoutes'))
app.use("/api/services", require('./services/categories/services/routes/serviceRoutes'))
app.use("/api/categories", require('./services/categories/routes/categoryRoutes'))
app.use("/api/servicePricing", require('./services/service-prices/routes/servicePricingRoutes'))


// Connect to Redis
redisClient.connect().then(() => console.log("Redis connected successfully")).catch(console.error);


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});


// remaining work is to set up  server.js redisClient .env file  install dependancies