import { SUBMIT_FORM } from "../actions"

const initialState = [{
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
}]


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SUBMIT_FORM:
            return [...state, {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: Date.now()
            }]

        default:
            return state
    }
}

export default reducer