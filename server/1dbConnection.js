// import mongoose
import mongoose from "mongoose";

// import dotenv
import dotenv from "dotenv";

// dotenv setup
dotenv.config();

// mongo db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("mongo db connected successfully");
  } catch (error) {
    console.error("mongo db connection failed:", error);
  }
};
dbConnection();

// export dbConnection
export default dbConnection;
