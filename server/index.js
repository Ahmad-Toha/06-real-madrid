// import express
import express from "express";

// import express middlewares
import dotenv from "dotenv";
import cors from "cors";

// import files
import route from "./4route.js";
import dbConnection from "./1dbConnection.js";

// express setup
const app = express();

// express middlewares setup
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
  res.send(server);
});

// express routes setup
app.use("/api", route);

// express listen setup
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

// mongo db connection
dbConnection();
