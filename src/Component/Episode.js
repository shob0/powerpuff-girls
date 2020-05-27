import React from "react";
import Title from "./View/Title";
import Details from "./View/Details";
import { useSelector } from "react-redux";

function Episode() {
  const episode = useSelector((state) => state.episode);
  return (
    <div className="main">
      <Title name={episode.name} />
      <Details image={episode.image.medium} summary={episode.summary} />
    </div>
  );
}

export default Episode;
