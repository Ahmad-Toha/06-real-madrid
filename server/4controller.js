// player model import
import Player from "./2schema&model.js";

// get all controller
export const getAll = async (_req, res) => {
  try {
    const getAllData = await Player.find();
    res.status(200).json(getAllData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// create controller
export const create = async (req, res) => {
  try {
    const createData = await new Player(req.body).save();
    res.status(200).json(createData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// get one controller
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).json(await Player.findById(id));
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// update controller
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    res
      .status(200)
      .json(await Player.findByIdAndUpdate(id, req.body, { new: true }));
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// remove controller
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    await Player.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
