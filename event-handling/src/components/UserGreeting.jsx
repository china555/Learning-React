import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //Approach 4
    return this.state.isLoggedIn && <div>Hello China</div>;
    //Approach 3
    // return this.state.isLoggedIn ? (
    //   <div>Welcome China</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //Approach 2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome China</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    //Approach 1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome China</div>;
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <div>Welcome China</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}
