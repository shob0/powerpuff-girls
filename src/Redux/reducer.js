import {
  FETCH_SHOWS_ERROR,
  FETCH_SHOWS_PENDING,
  FETCH_SHOWS_SUCCESS,
  FETCH_EPISODES_PENDING,
  FETCH_EPISODES_ERROR,
  FETCH_EPISODES_SUCCESS,
  EPISODE_SELECTED,
  SHOW_SELECTED,
} from "./action";

const INITIAL_STATE = {
  pending: false,
  shows: [],
  selectedShow: 0,
  error: null,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOWS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        pending: false,
        shows: action.payload,
      };
    case SHOW_SELECTED: {
      return {
        ...state,
        selectedShow: action.payload,
      };
    }
    case FETCH_SHOWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_EPISODES_PENDING: {
      return {
        ...state,
      };
    }
    case FETCH_EPISODES_SUCCESS: {
      return {
        ...state,
        episodes: action.payload,
      };
    }
    case FETCH_EPISODES_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case EPISODE_SELECTED: {
      return {
        ...state,
        episode: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
