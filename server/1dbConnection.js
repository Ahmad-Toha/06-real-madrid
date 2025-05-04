// import mongoose
import mongoose from "mongoose";

// import dotenv
import dotenv from "dotenv";

// dotenv setup
dotenv.config();

// mongo db connection
const dbConnection = async () => {
  await mongoose.connect(process.env.MONGOURL);
};
dbConnection()
  .then(() => {
    console.log("mongo db connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

export default dbConnection;
