import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./2Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://real-madrid-server.vercel.app/api"
      );
      setPlayers(response.data);
    };
    getData();
  }, []);

  const remove = async (playerId) => {
    try {
      await axios.delete(
        `https://real-madrid-server.vercel.app/api/remove/${playerId}`
      );
      setPlayers((allPlayers) => {
        return allPlayers.filter((player) => playerId !== player._id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="home-page">
        <h1 className="home-title">REAL MADRID</h1>
        <div className="cards">
          {players.map((player) => {
            return (
              <div className="card">
                <img
                  className="player-img"
                  src={player.image}
                  alt="player image"
                />
                <p className="player-name">
                  <b>Name:</b> {player.name}
                </p>
                <p className="player-country">
                  <b>Country:</b> {player.country}
                </p>
                <p className="player-position">
                  <b>Positin:</b> {player.position}
                </p>
                <p className="player-jersy">
                  <b>Market value:</b> {player.market_value}
                </p>
                <div className="action-div">
                  <Link to={`/edit/${player._id}`}>
                    <button className="edit-button">EDIT</button>
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => {
                      remove(player._id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
          <Link id="add-card" className="card" to={"/add"}>
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
