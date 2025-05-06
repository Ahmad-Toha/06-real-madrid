import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./4Add.css";

const Add = () => {
  const navigate = useNavigate();

  const [newPlayer, setNewPlayer] = useState({
    name: "",
    country: "",
    position: "",
    market_value: "",
    image: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setNewPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      axios.post("https://real-madrid-server.vercel.app/add", newPlayer);
      navigate("/");
      setNewPlayer({
        name: "",
        country: "",
        position: "",
        market_value: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-div">
        <div className="add-form">
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h1>Add new player</h1>
          <form onSubmit={submitForm}>
            <div className="input-div">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={newPlayer.name}
                placeholder="enter player name"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="input-div">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={newPlayer.country}
                placeholder="enter player country"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="input-div">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={newPlayer.position}
                placeholder="enter player position"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="input-div">
              <label>Market value</label>
              <input
                type="text"
                name="market_value"
                value={newPlayer.market_value}
                placeholder="enter player market value"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="input-div">
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={newPlayer.image}
                placeholder="enter player image URL"
                autoComplete="off"
                onChange={inputHandler}
              />
            </div>
            <div className="button-div">
              <button type="submit">ADD PLAYER</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
