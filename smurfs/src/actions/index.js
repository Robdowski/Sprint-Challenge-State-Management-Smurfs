import axios from 'axios'

export const SUBMIT_FORM = 'SUBMIT_FORM'
export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const DELETE_SMURF = 'DELETE_SMURF'
export const BEGIN_EDIT = 'BEGIN_EDIT'
export const SUBMIT_EDIT = 'SUBMIT_EDIT'

export const submitForm = e => dispatch => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload: e.target})
    axios.post('http://localhost:3333/smurfs', {
        name: e.target.name.value,
        age: e.target.age.value,
        height: e.target.height.value,
        id: Date.now()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}

export const getSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_ERROR, payload: err.response}))
}

export const deleteSmurf = id => dispatch => {
    dispatch({type: DELETE_SMURF, payload: id})
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const beginEdit = () => dispatch => {
    dispatch({type: BEGIN_EDIT})
}

export const submitEdit = e => dispatch => {
    console.log('event target', e.target)
    e.preventDefault()
    dispatch({type: SUBMIT_EDIT, payload: e.target.id})
    axios.put(`http://localhost:3333/smurfs/${e.target.id}`, {
        name: e.target.editname.value,
        age: e.target.editage.value,
        height: e.target.editheight.value,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
