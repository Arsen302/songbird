import React from "react";
import { Header, QuestionBlock, OptionBlock, ResultBlock } from "../index";

import songs from "../../data/songs";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <QuestionBlock />
      <div className="row mb2">
        <div className="col-md-6">
          <OptionBlock songs={songs} />
        </div>
        <div className="col-md-6">
          <ResultBlock songs={songs} />
        </div>
      </div>
      <button className="btn btn-dark btn-lg btn-block">Next Level!</button>
    </div>
  );
};

export default App;
