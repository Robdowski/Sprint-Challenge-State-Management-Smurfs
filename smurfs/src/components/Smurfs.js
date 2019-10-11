import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

function Smurfs(props) {
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs)