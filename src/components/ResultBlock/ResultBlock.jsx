import React from "react";

import "./ResultBlock.scss";

const ResultBlock = ({ songs }) => {
  const songsItems = songs[0].map((song) => (
    <div className="person-details card">
      <img className="person-image" src={song.image} alt="song" />
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">{song.name}</span>
          </li>
          <li className="list-group-item">
            <span className="term">{song.species}</span>
          </li>
          <li className="list-group-item">
            <span className="term">{song.description}</span>
          </li>
          <li className="list-group-item">
            <audio className="term">{song.audio}</audio>
          </li>
        </ul>
      </div>
    </div>
  ));

  return <div>{songsItems}</div>;
};

export default ResultBlock;
