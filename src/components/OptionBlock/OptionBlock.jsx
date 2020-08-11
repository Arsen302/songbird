import React from "react";

import "./OptionBlock.scss";

const OptionBlock = ({ songs }) => {
  const songsList = songs[0].map((song) => (
    <li
      className="list-group-item"
      key={song.id}
      onClick={() => console.log("click!")}
    >
      {song.name}
    </li>
  ));

  return (
    <div>
      <ul className="item-list list-group">{songsList}</ul>
    </div>
  );
};

export default OptionBlock;
