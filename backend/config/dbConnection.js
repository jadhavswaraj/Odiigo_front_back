// const mongoose = require("mongoose");

// const connectDb = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING);
//         console.log(`Connected to MongoDB Successfully.. \nHostName : ${connect.connection.host} \nDatabase-Name : ${connect.connection.name}`);
//     }
//     catch (err) {
//         console.log(err);
//         process.exit(1);

//     }
// }

// module.exports = connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // Increase timeout to 50s
    });
    console.log(
      `Connected to MongoDB Successfully..\nHostName: ${connect.connection.host}\nDatabase-Name: ${connect.connection.name}`
    );
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDb;
