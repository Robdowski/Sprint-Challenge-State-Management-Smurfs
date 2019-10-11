
export const SUBMIT_FORM = 'SUBMIT_FORM'

export const submitForm = e => dispatch => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload:e.target})
}