const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

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

export function fetchFeeds(feedurl) {
  if (!(/^http:\/\//.test(feedurl))) {
    feedurl = "http://" + feedurl;
  }

  var GOOGLE_FEED_API_URL = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=';
  var url = GOOGLE_FEED_API_URL + encodeURIComponent(feedurl);

  return (dispatch,getState) => {
    dispatch(feedsRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(feedsSuccess(json))
      })
      .catch((err)=> {
        dispatch(feedsFailure(err));
      })
  }
}
