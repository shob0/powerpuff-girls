import React from "react";
import Episode from "./Episodes";
import "./Shows.css";
import Title from "./View/Title";
import Details from "./View/Details";
import BackButton from "./View/BackButton";

function Shows(props) {
  const show = props.show;
  const rating = Object.keys(show.rating)[0];
  return (
    <div>
      <Title name={show.name} rating={rating} />
      <Details image={show.image.medium} summary={show.summary} />
      <Episode />
    </div>
  );
}

export default Shows;
