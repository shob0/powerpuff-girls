import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shows from "./Shows";
import { getShowdetails } from "../Redux/actionCreator";

function Landing(props) {
  const show = useSelector((state) => {
    return state.shows[state.selectedShow];
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (show === undefined) {
      dispatch(
        getShowdetails(
          "https://api.tvmaze.com/search/shows?q=the-powerpuff-girls"
        )
      );
    }
  }, [dispatch, show]);
  return (
    <div className="main">
      {show === undefined && <div>Loading</div>}
      {show !== undefined && <Shows show={show} />}
    </div>
  );
}

export default Landing;
