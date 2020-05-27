import React from "react";
import Title from "./View/Title";
import Details from "./View/Details";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Episode() {
  const episode = useSelector((state) => state.episode);

  return (
    <div className="main">
      <div className="show-main-div ">
        {episode === undefined && <Redirect to="/" />}
        {episode !== undefined && (
          <>
            <Title
              name={episode.name}
              rating="none"
              showTitle={episode.showTitle}
            />
            <Details
              image={episode.image}
              summary={episode.summary}
              imgAlt={episode.url}
            />
            <div style={{ textAlign: "left", marginTop: "2rem" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Episode Details:</span>{" "}
                Season{" "}
                {episode.season < 10 ? "0" + episode.season : episode.season}{" "}
                Episode{" "}
                {episode.number < 10 ? "0" + episode.number : episode.number}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Aired on:</span>{" "}
                {episode.airdate}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Episode;
