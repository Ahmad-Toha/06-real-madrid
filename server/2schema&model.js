// import mongoose
import mongoose from "mongoose";

// import mongo database
import dbConnection from "./1dbConnection.js";

// schema setup
const Schema = mongoose.Schema;

// player schema
const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  market_value: {
    type: String,
  },
  image: {
    type: String,
  },
});

// player model
const Player = mongoose.model("Player", playerSchema);

// export player model
export default Player;
