import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      password: null,
    };
  }

  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div>
        <h1>form handling</h1>
        <input
          type="text"
          name="user"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />

        <br />
        <br />
        <button onClick={() => this.submit()}>submit</button>
      </div>
    );
  }
}

export default Form;
