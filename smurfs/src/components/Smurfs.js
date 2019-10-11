import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, deleteSmurf } from '../actions'
import SmurfCard from './SmurfCard'

function Smurfs(props) {
    useEffect(() => props.getSmurfs(), [])
    return (
        <div>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
            {props.isFetching && <h2>Loading Smurfs...</h2>}
            {props.smurfs.length > 0 && props.smurfs.map(item => <SmurfCard item={item} deleteSmurf={props.deleteSmurf} />)}
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

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs)