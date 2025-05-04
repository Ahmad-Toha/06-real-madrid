import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./4Add.css";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updatePlayer, setUpdatePlayer] = useState({
    name: "",
    country: "",
    position: "",
    market_value: "",
    image: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/detail/${id}`
        );
        setUpdatePlayer(response.data);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };
    getData();
  }, [id]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdatePlayer({ ...updatePlayer, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/edit/${id}`, updatePlayer);
      navigate("/");
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
          <h1>update player</h1>
          <form onSubmit={submitForm}>
            <div className="input-div">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={updatePlayer.name}
                placeholder="enter player name"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="input-div">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={updatePlayer.country}
                placeholder="enter player country"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="input-div">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={updatePlayer.position}
                placeholder="enter player position"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="input-div">
              <label>Market value</label>
              <input
                type="text"
                name="market_value"
                value={updatePlayer.market_value}
                placeholder="enter player market value"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="input-div">
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={updatePlayer.image}
                placeholder="enter player image URL"
                autoComplete="off"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="button-div">
              <button type="submit">UPDATE PLAYER</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
