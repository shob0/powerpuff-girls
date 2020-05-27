import React from "react";
import Episode from "./Episodes";
import "./Shows.css";
import Title from "./View/Title";
import Details from "./View/Details";

function Shows(props) {
  const show = props.show;
  const rating = show.rating;
  return (
    <>
      <div className="show-main-div">
        <Title name={show.name} rating={rating} />

        <div className="details-box">
          <Details
            image={show.image}
            summary={show.summary}
            imgAlt={show.url}
          />
        </div>
      </div>
      <Episode />
    </>
  );
}

export default Shows;
