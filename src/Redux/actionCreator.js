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
import SHOWS from "../Local/Shows.json";
import EPISODES from "../Local/Episode.json";

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
    var data = processShowData(SHOWS);
    dispatch(fetchShowsSuccess(data));
    dispatch(selectedShow(6771));
  };
}

export function getEpisodedetails(url) {
  return (dispatch: Function) => {
    dispatch(fetchEpisodeSuccess(EPISODES));
  };
}
