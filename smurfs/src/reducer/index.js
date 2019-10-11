import { SUBMIT_FORM, START_FETCHING, FETCH_ERROR, FETCH_SUCCESS, DELETE_SMURF, BEGIN_EDIT, SUBMIT_EDIT } from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  smurfs: [],
  isEditing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [...action.payload]
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        smurfs: [...state.smurfs]
      };
    case SUBMIT_FORM:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name.value,
            age: action.payload.age.value,
            height: action.payload.height.value,
            id: Date.now()
          }
        ]
      };
    case DELETE_SMURF:
      return{
        ...state,
        smurfs: state.smurfs.filter(item => item.id !== action.payload)
      }
    case BEGIN_EDIT:
      return{
        ...state,
        isEditing: true
      }

    case SUBMIT_EDIT:
      return{
        ...state,
        isEditing: false
      }

    default:
      return state;
  }
};

export default reducer;
