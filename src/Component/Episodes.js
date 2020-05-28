import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodedetails, selectedEpisode } from "../Redux/actionCreator";

function Episode() {
  const showId = useSelector((state) => state.selectedShow);
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);
  const name = useSelector((state) => state.shows[showId].name);

  const url = `https://api.tvmaze.com/shows/${showId}/episodes`;

  useEffect(() => {
    if (episodes === undefined) {
      dispatch(getEpisodedetails(url));
    }
  }, [dispatch, showId, url, episodes]);

  return (
    <div className="Episode">
      {episodes === undefined && <div>Loading</div>}
      {episodes !== undefined && (
        <div>
          <div className="link-box">
            <h2 className="Episode-title">Episodes</h2>
            <div className="flex-box">
              <div>Name</div>
              <div>Series and Episode</div>
              <div>Year</div>
            </div>
            <ul>
              {episodes.map((episode) => (
                <li key={episode.id}>
                  <div>
                    <Link
                      to="episode"
                      className="Link"
                      onClick={() => {
                        episode.showTitle = name;
                        dispatch(selectedEpisode(episode));
                      }}
                    >
                      <div className="flex-box">
                        <p>{episode.name}</p>
                        <span>
                          S
                          {episode.season < 10
                            ? "0" + episode.season
                            : episode.season}
                          -E
                          {episode.number < 10
                            ? "0" + episode.number
                            : episode.number}
                        </span>
                        <span>{episode.airdate}</span>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Episode;
