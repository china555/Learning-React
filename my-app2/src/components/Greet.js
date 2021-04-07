import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// You are required to create two information form (Type: normal and special) that allow users
// to provide the following information.
class InfoForm extends React.Component {
  constructor(props) {
    super(props); //use this
    //normal
    if (this.props.type === "normal") {
      this.state = {
        firstname: "",
        lastname: "",
        age: "",
      };
    }
    //special
    else {
      this.state = {
        firstname: "",
        lastname: "",
        age: "",
        nationality: "",
        disability: "Yes",
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //e ; elements
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);
    if (name === "age") {
      if (!Number(value)) {
        alert("Your age must be a number");
      }
    }
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.type === "normal")
      alert(
        `Hello, ${this.state.firstname} ${this.state.lastname}\n Your Age is ${this.state.age}`
      );
    else
      alert(
        `Hello, ${this.state.firstname} ${this.state.lastname}\n Your nationality is ${this.state.nationality}`
      );
  }
  render() {
    if (this.props.type === "normal") {
      return (
        <form>
          <label>First Name: </label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            name="lastname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
      //special
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={this.state.nationality}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={this.state.nationality}
            onChange={this.handleChange}
          />
          <br />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={this.state.nationality}
            onChange={this.handleChange}
          />
          <br />
          {/* -------------------------------------- */}
          <label>Pick your nationality:</label>
          <select
            value={this.state.nationality}
            onChange={this.handleChange}
            name="nationality"
          >
            <option value="Thai">Thai</option>
            <option value="Japanese">Japanese</option>
          </select>
          <br />
          {/* -------------------------------------- */}
          <label>Disability:</label>
          <select
            value={this.state.disability}
            onChange={this.handleChange}
            name="disability"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          {/* -------------------------------------- */}
          <input type="submit" value="submit" />
        </form>
      );
    }
  }
}
//ReactDOM
ReactDOM.render(<InfoForm type="normal" />, document.getElementById("root"));
ReactDOM.render(<InfoForm type="special" />, document.getElementById("root"));
