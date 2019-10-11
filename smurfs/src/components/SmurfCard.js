import React from "react";
import { connect } from "react-redux";
import { beginEdit, submitEdit } from '../actions'

function SmurfCard(props) {
  if (!props.isEditing) {
    return (
      <div>
        <h2>{props.item.name}</h2>
        <p>Age: {props.item.age}</p>
        <p>Height: {props.item.height}</p>
        <button onClick={() => props.deleteSmurf(props.item.id)}>
          Remove Smurf
        </button>
        <button onClick={() => props.beginEdit()} >Edit Smurf</button>
      </div>
    );
  } else {
    return (
      <form id={props.item.id} onSubmit={props.submitEdit}>
        <label htmlFor="editname">
          {" "}
          Name:
          <input type="text" name="editname" htmlFor="editname" />
        </label>
        <label htmlFor="editage">
          Age:
          <input type="text" name="editage" htmlFor="editage" />
        </label>
        <label htmlFor="editheight">
          Height:
          <input type="text" name="editheight" htmlFor="editheight" />
        </label>
        <button type="submit">Submit Edit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEditing: state.isEditing
  };
};

export default connect(
  mapStateToProps,
  { beginEdit, submitEdit }
)(SmurfCard);
