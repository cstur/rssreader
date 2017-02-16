import {
  ADD_FEED
} from '../constants/ActionTypes'

const initialState = {
  feedList: []
};

export default function entities(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FEED:
      return {feedList:[...state.feedList,action.newFeed]}
    default:
      return state
  }
}
