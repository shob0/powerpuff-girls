import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEpisodedetails, selectedEpisode } from "../Redux/actionCreator";

function Episode() {
  const showId = useSelector((state) => state.selectedShow);
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);

  useEffect(() => {
    const url = `http://api.tvmaze.com/shows/${showId}/episodes`;
    dispatch(getEpisodedetails(url));
  }, [dispatch, showId]);

  return (
    <div className="Episode">
      {episodes === undefined && <div>Loading</div>}
      {episodes !== undefined && (
        <div>
          <div className="link-box">
            <h2 className="Episode-title">Episodes</h2>
            {episodes.map((episode) => (
              <div key={episode.id}>
                <Link
                  to="episode"
                  className="Link"
                  onClick={() => {
                    dispatch(selectedEpisode(episode));
                  }}
                >
                  {episode.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Episode;
