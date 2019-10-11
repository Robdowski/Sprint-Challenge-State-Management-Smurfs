import React from "react";
import { connect } from "react-redux";
import { submitForm } from "../actions";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <label htmlFor="name">
          {" "}
          Name:
          <input type="text" name="name" htmlFor="name" />
        </label>
        <label htmlFor="age">
          Age:
          <input type="text" name="age" htmlFor="age" />
        </label>
        <label htmlFor="height">
          Height:
          <input type="text" name="height" htmlFor="height" />
        </label>
        <button type="submit">Submit New Smurf</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(
  mapStateToProps,
  { submitForm }
)(Form);
