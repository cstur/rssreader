import {
  FEEDS_REQUEST,
  FEEDS_SUCCESS,
  FEEDS_FAILURE,
  ADD_FEED
} from '../constants/ActionTypes'

function feedsRequest() {
  return {
    type: FEEDS_REQUEST
  }
}

function feedsSuccess(payload) {
  return {
    type: FEEDS_SUCCESS,
    entities:payload
  }
}

function feedsFailure(error) {
  return {
    type: FEEDS_FAILURE,
    error: error
  }
}

export function addFeed(feed){
  return {
    type: ADD_FEED,
    newFeed: feed
  }
}

export function fetchFeeds(feedurl) {
  if (!(/^http:\/\//.test(feedurl))) {
    feedurl = "http://" + feedurl;
  }

  var FEED_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';
  var url = FEED_API_URL + feedurl;

  return (dispatch,getState) => {
    dispatch(feedsRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(feedsSuccess(json))
        dispatch(addFeed(json.feed))
      })
      .catch((err)=> {
        dispatch(feedsFailure(err));
      })
  }
}
