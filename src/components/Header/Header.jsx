import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="header d-flex">
        <h1>
          <a href="#/">MovieQuiz</a>
        </h1>
        <p>Score: 12</p>
      </div>
      <ul className="d-flex item-list list-group list-group-horizontal">
        <li className="list-group-item">
          <span>Rock-n-Roll!</span>
        </li>
        <li className="list-group-item">
          <span>Jazz</span>
        </li>
        <li className="list-group-item">
          <span>Trap</span>
        </li>
        <li className="list-group-item">
          <span>OST</span>
        </li>
        <li className="list-group-item">
          <span>Piano</span>
        </li>
        <li className="list-group-item">
          <span>Chill Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
