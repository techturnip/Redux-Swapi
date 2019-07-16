// import /* we need our action types here*/ "../actions";
import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILED
} from '../actions'

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  isLoading: false,
  errorMessage: null
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_CHARACTERS_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case GET_CHARACTERS_SUCCESS: {
      const { results } = action.payload
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        characters: results
      }
    }
    case GET_CHARACTERS_FAILED: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
