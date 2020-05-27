import {
  FETCH_SHOWS_ERROR,
  FETCH_SHOWS_PENDING,
  FETCH_SHOWS_SUCCESS,
  SHOW_SELECTED,
  FETCH_EPISODES_PENDING,
  EPISODE_SELECTED,
  FETCH_EPISODES_ERROR,
  FETCH_EPISODES_SUCCESS,
} from "./action";
import axios from "axios";
import { processShowData } from "../Services/services";

export function fetchShowsPending() {
  return {
    type: FETCH_SHOWS_PENDING,
  };
}

export function fetchShowsSuccess(shows) {
  return {
    type: FETCH_SHOWS_SUCCESS,
    payload: shows,
  };
}

export function fetchShowsError(error) {
  return {
    type: FETCH_SHOWS_ERROR,
    error: error,
  };
}

export function fetchEpisodeSuccess(episodes) {
  return {
    type: FETCH_EPISODES_SUCCESS,
    payload: episodes,
  };
}

export function fetchEpisodeError(error) {
  return {
    type: FETCH_EPISODES_ERROR,
    error: error,
  };
}

export function selectedShow(show) {
  return {
    type: SHOW_SELECTED,
    payload: show,
  };
}

export function selectedEpisode(episode) {
  return {
    type: EPISODE_SELECTED,
    payload: episode,
  };
}

export function getShowdetails(url) {
  return (dispatch: Function) => {
    axios
      .get(url)
      .then((res) => {
        var data = processShowData(res.data);
        dispatch(fetchShowsSuccess(data));
        var firstKey = Object.keys(data)[0];
        //Defaulting it to 6771 for use powerpuff girls
        dispatch(selectedShow(6771));
      })
      .catch((err) => dispatch(fetchShowsError(err.data)));
  };
}

export function getEpisodedetails(url) {
  return (dispatch: Function) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchEpisodeSuccess(res.data));
      })
      .catch((err) => dispatch(fetchEpisodeError(err.data)));
  };
}
