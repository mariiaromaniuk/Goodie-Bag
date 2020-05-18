const initialState = {
  all: [],
  loading: true
};

// Action
const GET_CANDIES = 'GET_CANDIES';

// Action creator
export const getCandies = candies => ({
  type: GET_CANDIES,
  candies
})

// Thunk
export const fetchCandiesFromServer = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/candies');
    dispatch(getCandies(data));
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, all: action.candies, loading: false };
    default:
      return state;
  }
}

export default rootReducer;
