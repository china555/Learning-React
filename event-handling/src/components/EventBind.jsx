import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //Apporch 3
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //     console.log(this);
  //   }
  //Apporch 4
  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Apporch 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Apporch 2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
