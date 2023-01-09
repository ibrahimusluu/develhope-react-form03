import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      // [name]: name !== "remember" ? value : checked,
    });
  };

  handleClickButton = () => {
    // When clicked, "the event handler attached to the button" should call an "onLogin" function
    this.onLogin();
  };

  onLogin = () => {
    // passed as a prop to the Login component, passing it the state.
    this.setState((myState) => {
      // console.log("props: ", this.props.login);
      myState.login = this.props.login;
      // console.log(myState);
    });
    // this.state.login = "test";
    console.log(this.state);
  };

  componentDidMount() {
    const button = document.getElementById("button");
    button.disabled = true; // here worked
  }

  componentDidUpdate() {
    // console.log("username: ", this.state.username);
    // console.log("password: ", this.state.password);
    // console.log("remember: ", this.state.remember);
    const button = document.getElementById("button");
    if (this.state.username !== "" && this.state.password !== "") {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <button id="button" onClick={this.handleClickButton}>
          Login
        </button>
      </div>
    );
  }
}
