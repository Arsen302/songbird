import React from "react";
import { Header, TrailerBlock, OptionBlock, ResultBlock } from "./index";

import "../App.scss";

const MainPage = () => {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [overview, setOverview] = React.useState("");

  return (
    <div>
      <Header />
      <TrailerBlock />
      <div>
        <OptionBlock />
        <ResultBlock />
      </div>
    </div>
  );
};

export default MainPage;
