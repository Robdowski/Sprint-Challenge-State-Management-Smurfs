import { SUBMIT_FORM } from "../actions";

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
